let FavGames = [
  "Fortnite",
  "GrandTheftAuto",
  "RocketLeague",
  "ClashofClans",
  "TumpleRun",
  "candyCrush",
];

FavGames[6] = "DeadByDayLight";
// Adding Object inside of Array
FavGames[7] = {
  game: "FlightSimulatar",
  game2: "TalkingTom",
};

console.log(FavGames);
// value from index
console.log(FavGames[5]);

const testArray = [];

for (i = 0; i < 10; i++) {
  testArray.push(i);
  console.log(testArray);
}
