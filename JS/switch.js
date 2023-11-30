const chocolateName = 1;
console.log(typeof chocolateName);

if (typeof chocolateName == "number") {
  console.log("You Can't Type in Number");
} else {
  const OurStocks = ["Toblerone", "Milka", "Twix", "lindt", "slice", "Cadbury"];
  console.log(OurStocks);

  const stock = OurStocks.some((stk) => chocolateName.includes(stk));
  console.log(stock);

  switch (true) {
    case stock:
      console.log(`${chocolateName} is Available`);
      break;
    default:
      console.log(`${chocolateName} Out Of Stock`);
  }
}
