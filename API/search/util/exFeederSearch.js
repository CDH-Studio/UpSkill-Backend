const exFeederSearch = profiles => {
  let results = profiles.filter(profile => profile.exFeeder === true);

  //   profiles.forEach(profile => {
  //     if (!profile.exFeeder) return;
  //     const exFeederBool = profile.exFeeder;

  //     // if (exFeederArray.includes(exFeederBool)) exFeederProf.push(profile);
  //     const result = words.filter(word => word.length > 6);
  //   });
  //   return exFeederProf;

  return results;
};

module.exports = exFeederSearch;
