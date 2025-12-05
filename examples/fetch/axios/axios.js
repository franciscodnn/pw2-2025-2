import axios from 'axios';

const resource = 'https://viacep.com.br/ws/58031000/json/';

function fetchCEP(cep) {
    return (
        axios
        .get(resource)
        .then( resposta => console.log(resposta.data) )
    );
}

async function asyncFetchCEP(cep) {
    const dadosCEP = await (
        axios
        .get(resource)
        .then( resposta => resposta.data )
    );

    console.log(dadosCEP);

    return dadosCEP; 
}

// fetchCEP('58031000');
asyncFetchCEP('58031000');