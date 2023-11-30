const bio = {
  name: "Abishek", // string
  age: 18, // Number/int
  isMale: true, // Boolean
  student: true, // Boolean
  language: ["English", "Tamil", "Korean"], // Array
  programingLanguage: [], // Array
  personalDetails: {
    bankAccount: "IOB",  // string
    bankCard: true,  // Boolean
    license: false,  // Boolean
  },
};

const programingLan = [1,2,3,4,4]
console.log(typeof programingLan);

bio.programingLanguage.push(programingLan);
console.log(bio.language.slice(2));

