// Creating function
function portfolio() {
  let profile = {
    Name: "Abishek",
    Age: 18,
    Student: true,
    WhatIdo: ["Artist", "Web Developer"],
    AboutMe:
      "Hi there! Im Abishek, a passionate developer who loves coding and exploring new things",
    FavCodingLan: ["Javascript", "Html", "css", "Python"],
    FavGames: ["Gta5", "Valorant"],
    EverPlayedGames: {
      ResidentEvil: false,
      ModeranWarfar3: false,
      DeadByDayLight: true,
      Uncharted: true,
      DaysGone: true,
    },
  };
  //   console.log(typeof profile);

  //reAsigning the Age
  profile.Age = 19;

  // Filteing the True Values
  const playedGames = Object.keys(profile.EverPlayedGames).filter(
    (game) => profile.EverPlayedGames[game]
  );
  // Adding little Bit Space and ,
  const FilterdGames = playedGames.join(", ");

  // Pushing New Index In [WhatIdo] Object
  profile.WhatIdo[2] = "Discord Bot Developer";

  // Loging the results
  console.log(
    `Name: ${profile.Name} \nAge: ${profile.Age}\nStudent: ${
      profile.Student ? "yes" : "No"
    }\nWorks: ${profile.WhatIdo[0]}, ${profile.WhatIdo[1]}, ${
      profile.WhatIdo[2]
    }\nAbout: ${profile.AboutMe}\nFavGames: ${profile.FavGames[0]},${
      profile.FavGames[1]
    }\nFavCoding: ${profile.FavCodingLan[0]},${profile.FavCodingLan[1]},${
      profile.FavCodingLan[2]
    }, ${profile.FavCodingLan[3]}\nPlayedGames: ${FilterdGames}`
  );
}

portfolio();
