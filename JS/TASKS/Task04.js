function PersonsDetails(name, age, isOld, isAlive, isGamer) {
   this.name = name;
   this.age = age;
   this.isOld = isOld;
   this.isAlive = isAlive;
   this.isGamer = isGamer;
 }
 
 const input1 = new PersonsDetails("Jai", 25, false, true, false);
 const input2 = new PersonsDetails("Abishek", 18, false, true, false);
 const input3 = new PersonsDetails("Jeeva", 21, false, true, true);
 const input4 = new PersonsDetails("Ajay", 42, true, true, true);
 const input5 = new PersonsDetails("Veena", 77, true, false, true);
 
 const oldPersons = [input1, input2, input3, input4, input5];
 
 oldPersons.forEach((e) => {
   const Name = e.name;
   const Age = e.age;
   const isAlive = e.isAlive;
   const isGamer = e.isGamer;
 
   console.log(
     `UserName : ${Name} | Age : ${Age} | isAlive : ${
       isAlive ? "Yes" : "No"
     } | Gamer : ${isGamer ? "yes" : "no"}`
   );
 });
 
 