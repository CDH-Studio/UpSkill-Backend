const exFeederSearch = profiles => {
  let results = profiles.filter(
    profile => profile.exFeeder === true && profile.flagged === false
  );
  return results;
};

module.exports = exFeederSearch;
