const getId = obj => obj.id;

const keyIdByName = (acc, obj) => {
  acc[obj.name] = obj.id;
  return acc;
};

const USERS = [
  {
    id: "e5dbf562-fc03-11e9-8f0b-362b9e155667",
    firstName: "Test",
    lastName: "Bro",
    email: "test@test.com",
    jobTitle: "Developer",
    telephone: "123-456-7890",
    cellphone: "012-345-6789",
    location: "235 Queen Street",
    manager: "Mena Machado",
    team: "Team1",
    firstLanguage: "English",
    secondLanguage: "French",
    yearService: "5",
    linkedin: "testbro@linkedin.com",
    github: "testbro@github.com",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "3b05e172-fc06-11e9-8f0b-362b9e155667",
    firstName: "Trevor",
    lastName: "Bivi",
    email: "TrevorBivi@test.com",
    jobTitle: "Developer",
    telephone: "123-456-7890",
    cellphone: "012-345-6789",
    location: "235 Queen Street",
    manager: "Mena Machado",
    team: "Team1",
    firstLanguage: "English",
    secondLanguage: "French",
    yearService: "5",
    linkedin: "TrevorBivi@linkedin.com",
    github: "TrevorBivi@github.com",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "5251b52c-fc06-11e9-8f0b-362b9e155667",
    firstName: "Rizvi",
    lastName: "Rab",
    email: "RizviRab@test.com",
    jobTitle: "Developer",
    telephone: "123-456-7890",
    cellphone: "012-345-6789",
    location: "235 Queen Street",
    manager: "Mena Machado",
    team: "Team1",
    firstLanguage: "English",
    secondLanguage: "French",
    yearService: "3",
    linkedin: "RizviRab@linkedin.com",
    github: "RizviRab@github.com",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "5251b52c-fc06-11e9-8f0b-362b9e155667",
    firstName: "Mamadou",
    lastName: "Bah",
    email: "MamadouBah@test.com",
    jobTitle: "Developer",
    telephone: "123-456-7890",
    cellphone: "012-345-6789",
    location: "235 Queen Street",
    manager: "Mena Machado",
    team: "Team1",
    firstLanguage: "English",
    secondLanguage: "French",
    yearService: "3",
    linkedin: "MamadouBah@linkedin.com",
    github: "MamadouBah@github.com",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const USER_IDS = USERS.map(user => user.id);

const SKILLS = [
  {
    id: "6ce13d22-bd51-46ef-8026-9612350ac55a",
    descriptionEn: "React",
    descriptionFr: "React",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "ba01fac6-e234-47d6-918f-6994aaf0f791",
    descriptionEn: "Docker",
    descriptionFr: "Docker",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "83f35ea1-febf-4615-a68e-4e82d7600bee",
    descriptionEn: "Kubernetes",
    descriptionFr: "Kubernetes",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "43fbe123-1974-4588-a94f-b2967e4326a8",
    descriptionEn: "Google Cloud Platform",
    descriptionFr: "Google Cloud Platform",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "da251d9c-4f4e-42a0-9d4e-0879f4a47147",
    descriptionEn: "JavaScript",
    descriptionFr: "JavaScript",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "1be1c6e4-9b68-4a9f-a2d4-8b56c38d611c",
    descriptionEn: "Feathers.js",
    descriptionFr: "Feathers.js",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "6efac7d0-398b-4ecc-9609-c1357dfe0309",
    descriptionEn: "AWS",
    descriptionFr: "AWS",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "5ad9c360-987b-4fb2-bde5-f098067dbaa7",
    descriptionEn: "Python",
    descriptionFr: "Python",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "cc2b59ec-7022-481c-8f57-55007df5e000",
    descriptionEn: "Django",
    descriptionFr: "Django",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const SKILL_IDS = SKILLS.map(getId);
