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
function generatePhoneNumber() {
  // seu código aqui
}

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
