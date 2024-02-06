function execute() {
  return new Promise((resolve, reject) => {
    console.log("a promise está sendo executada...");
    setTimeout(() => {
      if (true) {
        reject("a promise foi rejeitada");
      } else {
        console.log("resolvendo a promise...");
        resolve(42);
      }
    }, 2000);
  });
}

const p = execute();

p.then((res) => {
  console.log(`a promise foi resolvida. o resultado foi ${res}`);
})
  .catch((err) => {
    console.log(`a promise foi rejeitada! motivo: ${err}`);
  })
  .finally(() => {
    console.log(`a promise foi finalizada.`);
  });
