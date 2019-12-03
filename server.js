// BASE SETUP ==========================================================================

// Import the packages we need
const express = require("express"); // call express
const Keycloak = require("keycloak-connect");
const session = require("express-session");
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const sequelizedb = require("./config/database");

const app = express(); // define our app using express

const admin = require("./API/admin");
const profile = require("./API/profile");
const user = require("./API/user");
const geds = require("./API/geds");
const profileGeneration = require("./API/profileGeneration");
const options = require("./API/options").optionRouter;
const search = require("./API/search/");

dotenv.config(); // Config() function reads the .env file and sets the environment variables

// Testing the Postgres Connection
sequelizedb
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// Register 'handelbars' extension with The Mustache Express
app.engine(
  "hbs",
  expressHbs({
    extname: "hbs",
    defaultLayout: "layout.hbs",
    relativeTo: __dirname
  })
);
app.set("view engine", "hbs");

// Configure session to use memoryStore and Setup keycloak middleware to use the session memoryStore.
var memoryStore = new session.MemoryStore();
var keycloak = new Keycloak({ store: memoryStore });
//session
app.use(
  session({
    secret: process.env.KEYCLOAK_SECRET,
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  })
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.use(keycloak.middleware());

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API ===============================================
const router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api/)
router.get("/", function(req, res) {
  res.json({ message: "hooray! welcome to our api!" });
});

router.get("/getEmployeeInfo/:searchValue", keycloak.protect(), async function(
  req,
  res
) {
  let searchValue = req.params.searchValue;
  const data = await geds.getEmployeeInfo(searchValue);
  res.json(JSON.parse(data.body));
});

router.get("/geds/:searchValue", geds.getEmployeeInfo);

//User endpoints
router.get("/user/", user.getUser);
router.get("/user/:id", user.getUserById);
router.post("/user/", user.createUser);

//Profile endpoints
router.get("/profile/", profile.getProfile);
router
  .route("/profile/:id")
  .get(profile.getProfileById)
  .post(profile.createProfile)
  .put(profile.updateProfile);

//Admin endpoints
router
  .route("/admin/flagged/:id")
  .put(admin.updateFlagged)
  .get(admin.getFlagged);

router
  .route("/admin/inactive/:id")
  .put(admin.updateInactive)
  .get(admin.getInactive);

router
  .route("/admin/options/:type")
  .get(admin.getOption)
  .post(admin.createOption);

router
  .route("/admin/options/:type/:id")
  //.get(admin.getProfileById)
  .put(admin.updateOption)
  .delete(admin.deleteOption);

router.use("/option", options);

router.get("/profGen/:id", profileGeneration.getGedsAssist);

// Search routes
router.get("/search/fuzzySearch/", search);

// REGISTER OUR ROUTES ===============================================
// Note: All of our routes will be prefixed with /api

app.use("/api", router);

// Set the logout route to use keycloak middleware to kill session
app.use(keycloak.middleware({ logout: "/" }));

// START THE SERVER ==================================================
app.listen(port);
console.log("Magic happens on port " + port);
