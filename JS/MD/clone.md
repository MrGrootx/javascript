# clone Methods 

const names1 = ["Abishek", "Groot"];
const name2 = ["Jai", "Ajay", "invisible"];


// 1 concat()
let colonedArray = [].concat(names1, ...name2)
console.log(colonedArray);

// 2 JSON
const clonedArray = JSON.parse(JSON.stringify(name2,))
console.log(clonedArray);

// 3 slice()
let clonedArray = name2.slice()
console.log(clonedArray);