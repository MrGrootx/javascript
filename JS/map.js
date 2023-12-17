const names = [
  "Vanilla",
  "Avocado",
  "Mango",
  "Blueberry",
  "Pistachio",
  "Coconut",
  "Strawberry",
  "Lemon",
  "Superman",
  "Butter",
];

names.map((value,index) => {

const upperCaseValue = value.toUpperCase()
  console.log(index, upperCaseValue);
});

const inputName = "Superman";
const checkNames = names.some((name) => inputName.includes(name));
if(checkNames) {
    console.log('true');
} else {
    console.log('false');
}

// Join Arrey
const firstName = ['Groot', 'Groot']
const lastName = ['Development', 'x']
const personNames = firstName.map((value, index) => value + "-"+lastName[index])
console.log(personNames);
for(let name of personNames) {
    console.log(name);
}



/**
 * How this Works 
originalArray.map(currentValue,index,originalArray)
*/