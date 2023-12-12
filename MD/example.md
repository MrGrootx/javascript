const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    console.log(!input.value.length > 3);
    console.log(input.value.length < 20);
  if (!input.value.length > 3 && !input.value.length < 20) {
    alert("it's not your name Don't Fools");
    console.log(input.value.length);
  }


});
