function execute() {
  return new Promise((resolve, reject) => {
    console.log(`A promise esta sendo executada...`);
    setTimeout(() => {
      console.log(`Resolvendo a promise...`);
      resolve("Resultado");
    });
  });
}

const p = execute();

console.log(p);
