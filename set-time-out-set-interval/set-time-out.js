console.log("programa iniciado");

const timeoutId = setTimeout(() => {
  console.log("3 segundos se passaram após a inicialização do programa");
}, 3000);

clearTimeout(timeoutId);
