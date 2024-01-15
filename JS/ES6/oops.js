let print = function () {
  this.firstName = "Groot"; // to access this out side the function() use this.variable name
  //  console.log(firstName);
  this.printName = function () {
    return "This is my name " + this.firstName;
  };

  //   console.log(printName());
};

const test = new print();

console.log(test.firstName);
console.log(test.printName());
