const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = num.filter((num) => num % 2 === 0);
console.log(evenNum);

// flitering the user who to old
const users = [
  { name: "Abishek", age: "18" },
  { name: "Jai", age: "25" },
  { name: "Ajay", age: "35" },
];
const checkUser = users.filter((user) => user.age > 30);
console.log(checkUser);

// printing which word is > 4
const words = ["cat", "dog", "elephant", "fish", "giraffe"];
const filterWords = words.filter((word) => word);
console.log(filterWords);

// Method 1
/*

const each = filterWords.forEach((name) => {
//   console.log(name.length);
  if(name.length > 4) {
    console.log(`these are > 4 words ${name}`);
  } else {
    console.log(name);
  }
});

*/

// Method 2
const filterFourWords = words.filter(word => word.length === 4)
console.log(filterFourWords);



