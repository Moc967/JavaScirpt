const FIRST_NAME = 'John';
const LAST_NAME = 'Doe';
let age = 30;
// alert(`${FIRST_NAME} ${LAST_NAME} is ${age} years old.`);

let um = "um";
console.log(um, typeof um);
um = 1;
console.log(um, typeof um);
let fullName = `Nome completo: ${FIRST_NAME} ${LAST_NAME}`;
console.log(fullName, typeof fullName);

let nomeString = new String("Nome");
nomeString.length;

// Método Math
let n3=Math.floor(Math.random() * 10);
console.log(n3);

// Booleanos
let validation = 3 ===0;
console.log(validation);

console.log(validation.toString());

//Arrays

let array = [1,2,3,4,5];
console.log(array);

array.push(6);
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

// Objetos  

let person = {
    name: 'John',
    age: 30, 
    hobbies: ['Sports', 'Cooking'],
}  

person.hobbies.push('Reading');
console.log(person);


// Empty, Undefined, Null 

let abacaxi;
console.log(typeof(abacaxi));