// 3. manipulado arrays

const numeros =[];
numeros.push (10,20,30); //adicionar numeros ao final do array
numeros.unshift (5); //adicionar o nemero 5 no inicio
console.log("array após adições :" , numeros);// [5, 10, 20, 30]
numeros.pop (); //remover o ultimo elemento
numeros.shift ();// remover o primeiro elemento
console.log("array final :" , numeros) ; // [10, 20]    