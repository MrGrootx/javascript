// 5aa056df78d070bb784376917095f6c7
fetch("https://official-joke-api.appspot.com/jokes/programming/random").then((res) => res.json()).then((a) => {
   // console.log(a);
   // console.log(a[0].punchline);
   // console.log(a[0].setup);
   // console.log(a[0].type);
   // console.log(a[0].id);
   a.forEach((i) => {
      console.log(i.punchline);
   })
   
}).catch((err) => console.error(err))