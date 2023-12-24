// Items Names from h1
const itemName1 = document.getElementById("itemName1"); //
const itemName2 = document.getElementById("itemName2"); //
const itemName3 = document.getElementById("itemName3"); //
const itemName4 = document.getElementById("itemName4"); //
const itemName5 = document.getElementById("itemName5"); //
// console.log(itemName1 , itemName2 , itemName3 , itemName4 , itemName5);

// Items Price from h2
const itemPrice1 = document.getElementById("itemPrice1"); //
const itemPrice2 = document.getElementById("itemPrice2"); //
const itemPrice3 = document.getElementById("itemPrice3"); //
const itemPrice4 = document.getElementById("itemPrice4"); //
const itemPrice5 = document.getElementById("itemPrice5"); //

// console.log(itemPrice1 , itemPrice2 , itemPrice3 , itemPrice4 , itemPrice5);

//get the id from input
const item1 = document.getElementById("items-1"); //
const item2 = document.getElementById("items-2"); //
const item3 = document.getElementById("items-3"); //
const item4 = document.getElementById("items-4"); //
const item5 = document.getElementById("items-5"); //

// Checking
// console.log(item1 , item2 , item3 , item4 , item5);

// get the id from btns
const CartBtn1 = document.getElementById("addtocartBtn-1"); //
const CartBtn2 = document.getElementById("addtocartBtn-2"); //
const CartBtn3 = document.getElementById("addtocartBtn-3"); //
const CartBtn4 = document.getElementById("addtocartBtn-4"); //
const CartBtn5 = document.getElementById("addtocartBtn-5"); //

// Checking the Button
// console.log(CartBtn1 , CartBtn2 , CartBtn3 , CartBtn4 , CartBtn5);

const itemsCheck1 = document.getElementById("items-check1"); //
const itemsCheck2 = document.getElementById("items-check2"); //
const itemsCheck3 = document.getElementById("items-check3"); //
const itemsCheck4 = document.getElementById("items-check4"); //
const itemsCheck5 = document.getElementById("items-check5"); //
// console.log(itemsCheck1, itemsCheck2, itemsCheck3, itemsCheck4, itemsCheck5);

const quantity1 = document.getElementById("quantity-1"); //
const quantity2 = document.getElementById("quantity-2"); //
const quantity3 = document.getElementById("quantity-3"); //
const quantity4 = document.getElementById("quantity-4"); //
const quantity5 = document.getElementById("quantity-5"); //

// console.log(quantity1 , quantity2 , quantity3 , quantity4 , quantity5);

const price1 = document.getElementById("price-1"); //
const price2 = document.getElementById("price-2"); //
const price3 = document.getElementById("price-3"); //
const price4 = document.getElementById("price-4"); //
const price5 = document.getElementById("price-5"); //
console.log(price5);

// console.log(price1 , price2 , price3 , price4 , price5);

// Total Amount
const TotalAmount = document.getElementById("TotalAmount");

// Product Amount Set

const Amount = ["10", "20", "30", "40", "50"];

itemPrice1.textContent = Amount[0];
itemPrice2.textContent = Amount[1];
itemPrice3.textContent = Amount[2];
itemPrice4.textContent = Amount[3];
itemPrice5.textContent = Amount[4];

let FinnalAmount;

// Apple Cart
CartBtn1.addEventListener("click", function (e) {
  e.preventDefault();

  const itemName = itemName1.innerText;
  const Quantity = item1.value;
  const ProductPrice = parseInt(itemPrice1.innerText);

  itemsCheck1.textContent = itemName;
  quantity1.textContent = Quantity;
  price1.textContent = ProductPrice;

  const amt = ProductPrice;
  FinnalAmount = TotalAmount.textContent = amt;

  console.log(
    `ProductName: ${itemName}, ProductPrice: ${ProductPrice},  Quantity: ${Quantity}`
  );
});

// Orange Cart
CartBtn2.addEventListener("click", function (e) {
  e.preventDefault();

  const itemName = itemName2.innerText;
  const Quantity = item2.value;
  const ProductPrice = itemPrice2.innerText;
  console.log(ProductPrice);

  itemsCheck2.textContent = itemName;
  quantity2.textContent = Quantity;
  price2.textContent = ProductPrice;

  const amt = ProductPrice;
  FinnalAmount = TotalAmount.textContent = amt;

  console.log(
    `ProductName: ${itemName}, ProductPrice: ${ProductPrice},  Quantity: ${Quantity}`
  );
});

// Banana Cart
CartBtn3.addEventListener("click", function (e) {
  e.preventDefault();

  const itemName = itemName3.innerText;
  const Quantity = item3.value;
  const ProductPrice = itemPrice3.innerText;

  itemsCheck3.textContent = itemName;
  quantity3.textContent = Quantity;
  price3.textContent = ProductPrice;

  FinnalAmount = TotalAmount.textContent = ProductPrice;
  console.log(
    `ProductName: ${itemName}, ProductPrice: ${ProductPrice},  Quantity: ${Quantity}`
  );
});

// Pineapple Cart
CartBtn4.addEventListener("click", function (e) {
  e.preventDefault();

  const itemName = itemName4.innerText;
  const Quantity = item4.value;
  const ProductPrice = itemPrice4.innerText;

  itemsCheck4.textContent = itemName;
  quantity4.textContent = Quantity;
  price4.textContent = ProductPrice;

  FinnalAmount = TotalAmount.textContent = ProductPrice;
  console.log(
    `ProductName: ${itemName}, ProductPrice: ${ProductPrice},  Quantity: ${Quantity}`
  );
});

// slice Cart
CartBtn5.addEventListener("click", function (e) {
  e.preventDefault();

  const itemName = itemName5.innerText;
  const Quantity = item5.value;
  const ProductPrice = itemPrice5.innerText;

  itemsCheck5.textContent = itemName;
  quantity5.textContent =Quantity;
  price5.textContent = ProductPrice;

  FinnalAmount = TotalAmount.textContent = ProductPrice;
  console.log(
    `ProductName: ${itemName}, ProductPrice: ${ProductPrice},  Quantity: ${Quantity}`
  );
});
