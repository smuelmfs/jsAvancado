let seconds = 0;

const intervalId = setInterval(() => {
  seconds += 1;
  console.log(`Se passaram ${seconds} segundos`);

  if (seconds > 10) {
    clearInterval(intervalId);
    console.log("Tempo esgotado! Encerrando...");
  }
}, 1000);
