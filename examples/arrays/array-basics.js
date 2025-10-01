const array = [1, '2', true, [1, 2]]

// console.log(array[0]); // 1

// array[3] => [1, 2]
// array[3][0] => 1
// array[3][1] => 2
// console.log(array[3][1]); 

const a1 = [5, 10, 15];
// console.log(a1);

let a2 = [...a1];
a2[0] = 1;
// console.log(a1); // [5, 10, 15]

const numeros = [1, 2, 4];
let result = '';
 
for (const valor of numeros) {
  result += valor + ' ';
}
 
// console.log(result); //=> "1 2 4 "

const a3 = new Array(10);
// console.log(a3);

// console.log(Array(5).fill('0'));

const numbers = [5, 10, 15];
console.log( [5, 10, 15].length );

numbers.push(20);
console.log(numbers);

numbers.unshift(1);
console.log(numbers);

numbers.pop()
console.log(numbers);

console.log(numbers.shift())

console.log(numbers)
console.log(numbers.reverse())
console.log(numbers.reverse())

console.log([4, 1, 3, 2, 15].sort((a, b) => b - a));

console.log('----');
numbers.push(20, 25);
console.log(numbers);
numbers.splice(1, 3, numbers[2]);
console.log(numbers);

console.log(numbers.slice(0, 2));
console.log(numbers);