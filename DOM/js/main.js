const saveItemBtn = document.getElementById("saveItemBtn");

saveItemBtn.addEventListener("click", () => {
  const mainEl = document.getElementById("food-container");
  const itemsInputEl = document.getElementById("itemsInput");
  const inputValue = itemsInputEl.value;
  inputValue.value = "";

  const liEl = document.createElement("li");
  //   liEl.textContent = inputValue;
  liEl.setAttribute(
    "class",
    "font-semibold border mt-2 px-1 rounded py-1 cursor-pointer hover:bg-blue-500  hover:text-white"
  );

  // Creating New Div For New Adding items
  const divItem = document.createElement("div");
  const divRemoveBtn = document.createElement("div");

  // Creating Remove Btn
  divRemoveBtn.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;

  divItem.textContent = inputValue;
  divItem.setAttribute("class", "flex justify-between");

  mainEl.append(liEl);
  liEl.append(divItem);

  // appening the remove btn inside of new created div
  divItem.append(divRemoveBtn);



  // After Append adding onclick Attribute
  divRemoveBtn.parentElement.setAttribute("onclick", "removeItem(event)");
});
