const chocolateName = "Toblerone";

const OurStocks = ["Toblerone", "Milka", "Twix", "lindt", "slice", "Cadbury"];
console.log(OurStocks);

const stock = OurStocks.some((stk) => chocolateName.includes(stk));
console.log(stock);

switch (true) {
  case stock:
    console.log(`${chocolateName} is Available`);
    break;
  default:
    console.log(`${chocolateName} is Out of Out Of Stock`);
}
