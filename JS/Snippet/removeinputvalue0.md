  <input type="number" id="inputNumber">

const inputNumber = document.querySelector("#inputNumber");
console.log(inputNumber);
inputNumber.addEventListener("change",  changeQty)

function changeQty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
}
