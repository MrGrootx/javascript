const number = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(number);
number.push(9);
console.log(number);

const names = ["Groot", "Abishek"];
console.log(names)
const names2 = ["Jai", "Ajay", "Dark", "invisible"];
names.push(...names2)
console.log(`${names.join(" , ")}`);
console.log(names);
