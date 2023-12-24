// Local Pc [ last Time 6:52:18 sec]

// DataBase
const data = [
  {
    id: 1,
    name: "Apple 12",
    amt: 100000,
    img: "https://www.resetdigitale.it/118694-thickbox_default/smartphone-apple-iphone-12-pro-256gb-silver.jpg",
    category: "Mobile",
  },
  {
    id: 2,
    name: "Realme",
    amt: 5000,
    category: "Mobile",
  },
  {
    id: 3,
    name: "Poco",
    amt: 25000,
    category: "Mobile",
  },
  {
    id: 4,
    name: "Rog",
    amt: 55000,
    category: "Mobile",
  },
  {
    id: 5,
    name: "Xiaomi",
    amt: 5000,
    category: "Mobile",
  },
  {
    id: 6,
    name: "OnePlus",
    amt: 70000,
    category: "Mobile",
  },
];

/*
console.log(
      `ID: ${product.id} \nProduct Name ${product.name} \nAmount ${product.amt}`
    );
*/
const maindiv = document.getElementById("maindiv");

function displayProducts(products) {
  const product_details = products
    .map(
      (product) =>
        `

    <div>
      <div>ID: ${product.id}</div>
      <div>ProductName: ${product.name}</div>
      <div>Amount: ${product.amt}</div>
      <img src="${product.img}" width="80px" />
    </div>

    `
    )

    .join("");

  maindiv.innerHTML = product_details;
}
displayProducts(data);


