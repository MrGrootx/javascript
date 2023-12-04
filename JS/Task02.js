const btn = document.getElementById("CheckBtn");
const input = document.getElementById("WordsInput");
const ErrorMessage = document.getElementById("ErrorMessage");

// BlackList Words DataBase
const WordsList = ["fuck", "bitch"];

btn.addEventListener("click", function () {
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
    console.log("This is black list word");
    return;
  } else {
    console.log(input.value);
    console.log("No This Word to good to use");
  }
});
