const btn = document.getElementById("CheckBtn");
const input = document.getElementById("WordsInput");
const ErrorMessage = document.getElementById("ErrorMessage");

// BlackList Words DataBase
const WordsList = ["fuck", "bitch"];

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let getWords = input.value;

  if (getWords == Number(input.value)) {
    ErrorMessage.textContent = "you can't search in numbers";

    setTimeout(() => {
      ErrorMessage.textContent = "";
    }, 5000);

    return;
  }

  const blacklistWords = WordsList.some((word) => getWords.includes(word));
  // console.log(blacklistWords);

  if ((getWords = blacklistWords)) {
    ErrorMessage.textContent = "Blacklisted Word Spotted";
    console.log("");

    setTimeout(() => {
      ErrorMessage.textContent = "";
      input.value = "";
      location.reload();
    }, 5000);

    return;
  } else {
    ErrorMessage.textContent = `[ ${input.value} ] You Can Feel Free to use this word`;
  }
});
