
console.log("inicio de programa");
setTimeout( () => {
  console.log("1 time out")
}, 3000);

setTimeout( () => {
    console.log("2 time out")
}, 0);

  setTimeout( () => {
    console.log("3 time out")
}, 0);

console.log("fin de programa");