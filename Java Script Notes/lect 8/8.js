// conditional statement 
// if else statement

let age=19
if (age===20){
    console.log("you 've just became adult")
}
else if(age>=19){
    console.log("you're a teen")
}
else{
    console.log("you're older thsn us!")
}


// for taking user input -----------   prompt('what is your name')

// == (double equal to) operator used to check only values!!
// === (3 equal to) operator used to check both type as well as values.!!!
 

// means (for triple equal to) if assign value or input is string number and the condition is integer or float it doesn't print the  number!!


// != not equal to
// if != ,this is assigned as the conditional statement then if the conditional is false then it will not check further..

// !== if value and type are not matched..


// to check if variable is defined or not
const no=69

if (no){
    console.log('no. is present')
}
 
 

if (typeof no1 !=='undefined'){
    console.log('no. is present')
}
else {
    console.log('no. is absent')
}

const youDrink =false

if (youDrink){
    console.log('drunker')

}
else  {
    console.log('sober')


}

const Drink =false

if ( Drink){
    console.log('drunker')

}
else  {
    console.log('sober')
}


// AND Operator

 age=18;

if ( Drink && age>=18){
    console.log('you cannot drive ')

}
else  {
    console.log('you drive')

}

// OR Operator
if ( Drink || age>=18){
    console.log('you cannot drive ')

}
else  {
    console.log('you drive')

}


//ternary operator

let age1=19
console.log(age1==18? 'age is 18 ':'age is not 18')


//switch case statement
let age2= 19 
switch (age2) {
    case 18:
        console.log('i am 18')
        break;
        case 19:
        console.log('i am 19')
        break;
        case 20:
        console.log('i am not 18 anymore')
        break;
    
    default:
        console.log('my age is unknown')
        break;
}

// break use to not check or print an another element 
// if the first one is true

//coz if the first case if true and got printed
// then all other console.log printed as normal