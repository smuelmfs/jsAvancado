const p = new Promise((resolve, reject) => {
  console.log("a promise esta sendo executada");
  setTimeout(() => {
    // if (true) {
    //   reject(false);
    // }
    console.log("resolvendo a promise");
  }, 2000);
});

console.log(p);
setTimeout(() => {
  console.log(p);
}, 3000);
