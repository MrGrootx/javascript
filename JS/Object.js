const bio = {
  name: "Abishek", // string
  age: 18, // Number/int
  isMale: true, // Boolean
  student: true, // Boolean
  language: ["English", "Tamil", "Korean"], // Array
  programingLanguage: [], // Array
  personalDetails: {
    bankAccount: "IOB", // string
    bankCard: true, // Boolean
    license: false, // Boolean
  },
};

const programingLan = [1, 2, 3, 4, 4];
console.log(typeof programingLan);

bio.programingLanguage.push(programingLan);
console.log(bio.language.slice(2));

// Model 2

// not rec
const aboutMethod = {
  about: function () {
    return `${this.fullName} is from ${this.country}`;
  },
};

function Student(fullName, fatherName, age, country, address) {
  // const Details = {};  // same thing
  const Details = Object.create(aboutMethod)

  Details.fullName = fullName;
  Details.fatherName = fatherName;
  Details.age = age;
  Details.country = country;
  Details.address = address;
  Details.about = function () {
    return `${this.fullName} is from ${this.country}`;
  };
  return Details;
}

console.log(
  JSON.parse(
    JSON.stringify(Student("Abishek", "Bright", 18, "Canada", "Montreal"))
  )
);
console.log(Student("Abishek", "Bright", 18, "Canada", "Montreal"));
