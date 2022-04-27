// for conversion of one variable to another we use
// type conversion in javascript



//***************Type conversion ***********

console.log('lecture 5')


let myNum;

myNum =69

console.log(myNum , (typeof myNum))


let boolValue = false
console.log(boolValue , ( typeof boolValue))

let date = new Date();
console.log(date,( typeof date))

// Array length means how many element present
let arr = [1,3,5,7,9,'try',false,'then',true,0,1]
console.log(arr,( typeof arr))
console.log(arr.length)

//String length means how many characters present
let arr1 = String([1,3,5,7,9,'try',false,'then',true,0,1]);
console.log(arr1, ( typeof arr1))
console.log(arr1.length)


// two string method

let i =75;

console.log(i.toString() , typeof i)

let j = Number('69')
console.log(j ,(typeof j))


let k = Number('6d9')
console.log(k ,(typeof k))



//changing from string to integer:string into numeric value

let number =('33.088')
console.log(number, ( typeof number))

let number2 =parseInt('33.0.88')
console.log(number2, ( typeof number2))


// SIMILARLY THERES a parseFloat which convert number or string No. into float

let number3 =parseFloat('33.88')
console.log(number3, ( typeof number3))


//.tofixed() it increase the value of floating point 

console.log(number3.toFixed(7), typeof number)





//******Type Coercion***********


let mystr ='69'
let mynum=31

console.log(mystr +mynum)

//but for

mystr=Number('69')

 
console.log(mystr +mynum)