function imc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight !== "number" || typeof height !== "number") {
      reject("argument must be of type number");
    } else {
      resolve(weight / (height * height));
    }
  });
}

function showImc(weight, height) {
  imc(weight, height)
    .then((result) => {
      console.log(` o resultado do IMC foi de ${result}`);

      if (result < 18.5) {
        console.log("situação: magreza");
      } else if (result < 25) {
        console.log("situação: normal");
      } else if (result < 30) {
        console.log("situação: sobrepeso");
      } else if (result < 40) {
        console.log("situação: obesidade");
      } else {
        console.log("situação: obesidade grave");
      }
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(`calculando o IMC para o peso ${weight} e altura ${height}`);
}

showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, "texto")
showImc(82, 1.72)
showImc(120, 1.80)
