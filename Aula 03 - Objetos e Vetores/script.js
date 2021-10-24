/*let array = ['string', true, 1];
console.log(array);*/

//como declarar um Array
let array = ['string', true, 1, ['array1'], ['array2']]
//console.log(array[2])

/*foreach
array.forEach(function(item, index){
  console.log(item, index);
})*/

/* push() - adiciona um item a ultima posição do array
array.push('novo-item');
console.log(array)*/

/* push() - remove o ultimo item ao array
array.pop();
console.log(array)*/

/* shift() - remove o primeiro item do array
array.shift();
console.log(array)*/

/* unshift() - adiciona um primeiro item ao array
array.unshift('primeiro-item');
console.log(array)*/

/*indexOf() - Saber a posição do var no Array
console.log(array.indexOf(true))*/

//OBJETOS
let object = {string: 'strings', number: 1, boolean: true, array: ['array']}
//console.log(object.boolean)

var string = object.string;
console.log(string);

var arrayInt = object.array
console.log(arrayInt)

var {string, boolean} = object
console.log(string, boolean)