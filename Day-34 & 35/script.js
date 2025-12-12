console.log("Start");//synchronous
setTimeout(() => 
    console.log("Async Task")//asynchronous
, 1000);
console.log("End");//synchronous

//callback hell
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

//solution for callback hell - promises
function step(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 1000);
  });
}

step("Step 1")
  .then(() => step("Step 2"))
  .then(() => step("Step 3"));
