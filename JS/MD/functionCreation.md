# Function create ways

# creating perameter for value
function addStudent(fullName, father, age,  city) {
  const user = {};

  user.fullName = fullName;
  user.father = father;
  user.age = age;
  user.city = city;

  return user
}

# add value for each perameter
console.log(addStudent("Abishek","Groot","18","Torato"));