function step02() {
  console.log("passo 2");
}
 console.log("passo 1");
 step02();
 console.log("passo 3");
 console.log("passo 4");
 setTimeout(() => {
    console.log("passo 5");
 }, 3000)
 console.log("passo 6"); //executa imediatamente o passo 6, pois o setTimeout é uma function assincrona, pois nao trava o funcionamento do codigo