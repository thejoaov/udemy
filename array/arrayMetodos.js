const pilotos = ['Vettel', 'Alonso','Raikonen', 'Massa']
pilotos.pop() // Massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona na ultima posição
console.log(pilotos)

pilotos.shift() // Remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona na primeira posição
console.log(pilotos)

// Splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa quebrou de novo :/
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)  //Retorna novo array
console.log(algunsPilotos1)

// retorna novo array do índice 1 ao 4 (o 4 não entra no novo array)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

