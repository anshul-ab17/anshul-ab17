console.log('hey there, welcome to lecture 3rd!!!!')


//variables in javascript :var ,let ,const.



var me ='ab'
var you;
you= 'javascript'
console.log(me)

var score=69
console.log(score,me,you)


//Rules for creating javascript variables
/*

1. Cannot start with number  
2. Can start letters, $, or _
3. They are Case sensitive


*/


var city='melbourne'

console.log(city)


const user='starboy'

console.log(user)

//if we try to assign new value in the const it will throw an error.

//const newUser;  = THis will also throw an error

// because const have to be assigned always since it is a constant value.


{//this is a local variable

    let city='london'// this will print london instead of the melbourne
    city='miami'  // this will assign a new value. instead of melbourne and london.
    console.log(city)
  
}

console.log(city)// this will print value which is outside the container.

// array is a collection of elements
const arr1=[2,3,4,5,6,4,5,7,5,7,7,8]

console.log(arr1)

// .push is used to add(increase/push) elements in the array. 
arr1.push(9,10,12,14)

console.log(arr1)
//NOTES:Common programming case types:
/*
1.  camelCase
2.  kebab-case
3.  snake_case
4.  PascalCase

*/