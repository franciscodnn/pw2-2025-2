const pessoa1 = {
    name: "Fulano",
    email: "fulano@email.com"
}

const pessoa2 = {
    name: "sicrano",
    email: "sicrano@email.com"
}

console.log( pessoa1.name );

pessoa1.name = pessoa1.name.toUpperCase();
console.log( pessoa1.name );

const pessoas = [
    { nome: "Fulano", email: "fulano@email.com" },
    { nome: "sicrano", email: "sicrano@email.com" }
];
console.log( pessoas[1].email );

const pessoa = {
    nome: "Francisco",
    altura: 179,
    calcularDiferencaAltura: function(altura) {
        return Math.abs(this.altura - altura);
    }
}

pessoa.peso = 90;

console.log(pessoa.calcularDiferencaAltura(190));

console.log( pessoa.email );

const novaPessoa = {...pessoa, peso: 85};
// nova pessoa = { nome: "Francisco", altura: 179, 
//                         peso: 85, calcularDiferencaAltura ,
// }
novaPessoa.nome = "Jose";

console.log(pessoa.nome);

const ips = [
  { address: '192.168.0.2', mask: '255.255.255.0' },
  { address: '192.168.0.10', mask: '255.255.255.0' },
  { address: '192.168.0.26', mask: '255.255.255.0' },
];

ips.forEach(
    (ip) => {
        console.log(ip.address + '/' + ip.mask);
    }
);

const professor = {
    nome: "Francisco",
    email: "dantas.nobre@ifpb.edu.br",
    altura: 180,
    getNome: function() {
        return this.nome;
    }
};
console.log('----');
console.log( JSON.stringify(professor) );