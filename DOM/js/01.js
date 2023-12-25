// geting parent Form Html
const ulPlacesEL = document.querySelector("ul.places");
const greetingEl = document.querySelector("greeting");

// Creating Element for child
const headingEL = document.createElement("h1");
headingEL.textContent = "Hello";
// set Attribute Method for styleing etc
headingEL.setAttribute("style", "color: red");

// setting this value into parent as a child
greetingEl.append(headingEL);

const ulfragment = document.createDocumentFragment()

/*  
const maindiv = document.getElementById("maindiv");

const headingh1El = document.createElement("hi");
console.log(headingh1El);

headingh1El.setAttribute('class', "text-red-600 font-bold text-5xl")
headingh1El.innerText = "Document Object Model"

maindiv.append(headingh1El)

*/

