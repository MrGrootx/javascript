/*
<form action="#"  autocomplete="off">
      <fieldset>
        <legend>Gender</legend>
        <label><input type="radio" name="gender" value="male" /> Male</label>
        <label><input type="radio" name="gender" value="female" />Female</label>
      </fieldset>
      <button type="submit">submit</button>
    </form>
*/

const form = document.querySelector("form");
const radios = document.querySelectorAll('input[name="gender"]');

let selectedGender = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let selectedGender = "";

  radios.forEach((radio) => {
    if (radio.checked) {
      selectedGender = radio.value;
    }
    console.log(selectedGender);
  });
});
