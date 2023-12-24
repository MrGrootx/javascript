const input_field = document.querySelector("#input_field");

input_field.addEventListener('keyup', (e) => {

  const value = e.target.value.toLowerCase().trim()
  console.log(value); // print with me

})