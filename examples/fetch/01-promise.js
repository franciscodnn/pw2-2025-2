function sum(a, b) {
  return a + b;
}
 
function sumPromise(a, b) {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b))
      reject('Invalid numbers');
    else
      setTimeout(() => resolve(a + b), 2000);
  });
 
  return promise
}

console.log(sum(2, 5));
console.log(sumPromise(10, 5));
sumPromise(10, 5)
.then( resposta => console.log(resposta) )
.catch(erro => console.log(erro) );
console.log(sum(5, 5));