const maindiv = document.getElementById("maindiv");
console.log(maindiv);

const createh1 = document.createElement("h1");
createh1.textContent = "Javascript Dom";
// createh1.setAttribute("style", "color: red");
createh1.setAttribute(
  "class",
  "font-bold text-2xl text-center bg-green-700 text-green-400 p-32"
);
console.log(createh1);
maindiv.append(createh1);
