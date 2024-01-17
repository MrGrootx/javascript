/* html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JS&DOM</title>
  </head>
  <link rel="stylesheet" href="/css/index.css" />
  <!-- <script src="https://cdn.tailwindcss.com"></script> -->
  
  <style>
    div{
      padding: 30px;
      margin: 10px;
      border:  3px solid #333;
      text-align: center;
    }
  </style>

  <body>
    
    <h3>Event bubbleing | Event Capturing</h3>
    <div id="grandparent">
      grandparent
      <div id="parent">
        parent
        <div id="child">
          child
        </div>
      </div>
    </div>
  

    <script  src="./src/index.js"></script>
    <!-- <script  src="./JS/ES6/oops.js"></script> -->
  </body>
</html>




*/

/*
const grantparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

grantparent.addEventListener("click", function () {
  console.log("grandparent clicked");
},true);
parent.addEventListener("click", function () {
  console.log("parent clicked");
},true);
child.addEventListener("click", function () {
  console.log("child clicked");
},true);
*/

const grantparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

grantparent.addEventListener("click", function (e) {
  console.log("grandparent clicked");
},false);
parent.addEventListener("click", function (e) {
  console.log("parent clicked");
},false);
child.addEventListener("click", function (e) {
  console.log("child clicked");
  e.stopPropagation()
},true);


/* html2

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JS&DOM</title>
  </head>
  <link rel="stylesheet" href="/css/index.css" />
  <!-- <script src="https://cdn.tailwindcss.com"></script> -->

  <style>
    #modal{
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;
    }
    #modalContent{
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      color: black;
    }
    #modalContent h2{
      font-weight: 500;
    }
  </style>

  <body>
    <button id="btnModal">Open Modal</button>

    <div id="modal" class="modal">
      <div id="modalContent">
        <h2>Modal Heading</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quod
        </p>
        <button id="btnClose">Close</button>
      </div>
    </div>

    <script src="./src/index.js"></script>
    <!-- <script  src="./JS/ES6/oops.js"></script> -->
  </body>
</html>

*/


const btnModal = document.querySelector("#btnModal");
const modal = document.querySelector("#modal");
const btnClose = document.querySelector("#btnClose");
console.log(btnClose);
btnModal.addEventListener("click", function () {
  modal.style.display = "flex";
});

modal.addEventListener("click", function() {
  modal.style.display = "none";
})