// Desafio 10
function techList(NomeTech, name) {
  let arrayObjects = [];
  let NomeTechOrder = NomeTech.sort();
  if (NomeTech.length === 0) {
    return "Vazio!"
  }
  for (let index = 0; index < NomeTechOrder.length; index ++) {
    arrayObjects.push({tech: NomeTech[index], name: name});
  }
  return arrayObjects;
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

// Desafio 11
function generatePhoneNumber(numbers) {
  let phoneNumber = "";
  let flag = false;
  for (index of numbers) {
    let count = 0;
    for(index2 of numbers) {
      if (index2 === index) {
        count = count + 1;
      }
    }
    if (count > 2 || index > 9 || index < 0) {
      flag = true;
      break;
    }
  }
  if (numbers.length !== 11){
    return "Array com tamanho incorreto."
  } else if (flag === true) {
    return "não é possível gerar um número de telefone com esses valores"
  } else if (numbers.length === 11 && flag === false) {
    phoneNumber = ("(" + numbers[0] + numbers[1] + ") " + numbers[2] + numbers[3] + numbers[4] +numbers[5] + numbers[6] + "-" + numbers[7] + numbers[8] + numbers[9] + numbers[10]);
    return phoneNumber;
  } 
}
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 2, 3, 9, 6, 1, 9]))

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};