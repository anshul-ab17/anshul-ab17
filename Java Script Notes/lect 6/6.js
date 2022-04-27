console.log('hey guys')

//string concatenation

let name ='a'
const lastName ='b'

console.log(name+ lastName)

console.log(name+ ' '+lastName)

let html

html ="<h1>This a heading </h1>"+
 "<p> Para</p>"
console.log(html)

 // another way of concatenating
html =html.concat('this', 'string2');
console.log(html)

console.log(html.length);
console.log(html.toUpperCase());

console.log(html.toLowerCase());


console.log(html[5])


// show index of string

console.log(html.indexOf("This"))

// show index of string will aren't present inside a variable as '-1'
console.log(html.indexOf('this'))

console.log(html.indexOf('>'))

// for getting index of last element.

console.log(html.lastIndexOf('>'))

// to check the end string character!
console.log(html.endsWith('string2'))
console.log(html.endsWith('string3'))


// to check if the element is present in the string

console.log(html.includes('is'))

console.log(html.includes('hey'))


//for printing specific element in the console


console.log(html.substring(0,10))

// for getting substring from the end
console.log(html.slice(-10))

// slice also used as substring
console.log(html.slice(0,10))

// for splitting the string in javascript

console.log(html.split())
console.log(html.split(''))

// for split at specific part.  WE can use it to form a line by split after a full stop
console.log(html.split('>'))


//for replacing element in the string
console.log(html.replace('this','these'))




// Template Literals


let car1 ='camaro'
let car2= 'mustang'
let myLang =`hey ${car1} <h3> This is the 3rd heading!!</h3>  <p> We like ${car1} and ${car2}`;

// this changes html interface
document.body.innerHTML =myLang;

