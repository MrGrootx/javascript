//NOTE: How Promise Work
const promise = new Promise((res, rej) => {
   const sum = 1 + 1;
   if (sum == 2) {
     res("Success");
   } else {
     rej("Error");
   }
 });
 
 promise.then((msg) => console.log(msg)).catch((err) => console.error(err));
  // Promise will trigger then , then will trigger catch
 


  // COOL PROMISE

// Function for promise
  function promiseTimeout(duration) {
   return new Promise((res, rej) => setTimeout(res, duration));
 }
 
 promiseTimeout(1000)
   // Function resolve will call the then()
   .then(() => {
     console.log("1 promise");
     return promiseTimeout(2000); // returning duration for next then() callback
   })
   .then(() => {
     console.log("2 promise");
   });
 