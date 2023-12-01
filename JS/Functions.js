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

  const FavLanguageoutput = profile.FavCodingLan.join(", ");
  const FavGames = profile.FavGames.join(", ");
  const WhatIdo = profile.WhatIdo.join(", ");

  /**
 
    let FavLanOutput = [];
    for (let i = 0; i < profile.FavCodingLan.length; i++) {
      const Fav = profile.FavCodingLan[i];
      FavLanOutput.push(Fav);
    }
    const FavLanguageoutput = FavLanOutput;
    console.log(FavLanOutput);

 **/

  // Loging the results
  console.log(
    `Name: ${profile.Name} 
    \nAge: ${profile.Age}
    \nStudent: ${profile.Student ? "yes" : "No"}
    \nWorks: ${WhatIdo}
    \nAbout: ${profile.AboutMe}
    \nFavGames: ${FavGames}
    \nFavCodingLanguage: ${FavLanguageoutput}
    \nPlayedGames: ${FilterdGames}`
  );
}

portfolio();
