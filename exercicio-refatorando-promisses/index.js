//refazendo o exercicio de imc

async function imc(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number") {
    return Promisse.reject("argument must be of type number");
  } else {
    return weight / (height * height);
  }
}

async function showImc(weight, height) {
  try {
    console.log(`calculando o IMC para o peso ${weight} e altura ${height}`);

    const result = await imc(weight, height);

    console.log(`o resultado do imc foi de ${result}`);

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
  } catch (error) {
    console.log(error);
  }
}

showImc(71, 1.74);
showImc(48, 1.6);
showImc(71, "texto");
showImc(82, 1.72);
showImc(120, 1.8);
