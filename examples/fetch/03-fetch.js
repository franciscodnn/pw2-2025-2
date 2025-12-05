const resource = 'https://viacep.com.br/ws/58031000/json/';
const options = {
    method: 'GET'    
}

fetch(resource, options)
.then( resposta => resposta.json() )
.then( body => console.log(body) )
.catch( err => {
    console.log("Erro!!!")
    console.log(err) }
);
