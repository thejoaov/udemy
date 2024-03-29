const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },

]

// Desafio 1: Todos os alunos são bolsistas?
console.log(alunos.map(a => a.bolsista).reduce((resultado, bolsista) => resultado && bolsista))

// Desafio 2: Algum aluno é bolsista?
console.log(alunos.map(a => a.bolsista).reduce((resultado, bolsista) => resultado || bolsista))