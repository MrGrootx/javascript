// pass duration perameter
function setTimeOutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

setTimeOutPromise(1000)
  .then(() => {
    console.log("test 1");

    return setTimeOutPromise(1000);
  })
  .then(() => {
    console.log("test 2");

    return setTimeOutPromise(1000);
  });

//Promise DOM Event Selector
const button = document.querySelector("button");

function EventPromise(element, method) {
  return new Promise((resolve, rej) => {
    element.addEventListener(method, resolve);
  });
}

EventPromise(button, "click").then((e) => {
  console.log("Clicked");
  console.log(e);
});


// Api Fetch()
fetch("https://api.publicapis.org/entries").then((res) => {
  res.json().then((data) => {
    const mapdata = data.entries;
    //  console.log(data.entries[0].Description);

    mapdata.map((e) => {
      console.log(e.Description);
    });
  });
});