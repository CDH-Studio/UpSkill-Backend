const exFeederSearch = profiles => {
  let results = profiles.filter(
    profile => profile.exFeeder === true && profile.flagged === false
  );
  console.log("ttttthissss", profiles[0].flagged === true);
  console.log("ttttthissss", profiles[0].flagged);
  return results;
};

module.exports = exFeederSearch;
