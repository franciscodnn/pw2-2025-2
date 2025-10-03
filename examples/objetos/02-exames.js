class Exam {
    peso = [];
    gabarito = [];
    respostasEstudantes = [];

    constructor(weight, answer) {
        this.peso = weight;
        this.gabarito = answer;
    }

    add(resposta) {
        this.respostasEstudantes.push(resposta);
    }
    
}

const exame = new Exam([2, 2, 2, 2, 2], ['a','a', 'a', 'a', 'a']);
exame.add(['b', 'a', 'c', 'd', 'a']);
exame.add(['d', 'b', 'c', 'd', 'b']);

console.log(exame.respostasEstudantes);

// exame.avg() => calcular a média de todas as notas
// exame.min(3) => retornar as três menores notas
// exame.max(3) => retornar as três maior notas
// exame.lt(5) => retornar as notas menores do que 5
// exame.gt(5) => retornar as notas maiores do que 5
