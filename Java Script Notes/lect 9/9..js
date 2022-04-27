
// LOOPING(iteration) IN JAVASCRIPT

//FOR, WHILE, AND DO WHILE



//for loop



for (let i=0; i<10; i++){
    console.log(i)
}

// let i=0;  initializing and declaration the value of the i
// i<100 giving i the loop condition till which we wanna to run the program or code

// and increment that we can in no. and printing each number

// here let i=1; i+=1; and i++ means adding 1 to the number for looping





// While Loop
let a =0          // initialization and declaration of the variable
while(a<=10){      // while the condition is true 
    console.log(a)   // print the following numbers
    a++ // or a+=1;   // increment by 1
}



// Do While loop
let x=0;
 do{

    console.log(x+1)
    x+=1

 }
 while(x<10)


 // The Difference between while and do while loop is that 
//  while checks the condition first then print 
//  but , the do while first print the value then checks 
//  the condition that means, it atleast execute the code one time 
//  even though the  condition is false


// if we want to break the code in the do while loop
// in between then :


// means if wanna to stop the code in between of the iteration  we use: break
let n=0;
do{
    console.log(n)
    if(n===5){
        break;
    }

    n+=1;
    
}while(n<10)


// and if we want to skip one iteration in the  code we use: continue

let m=0;
do{

    if(m===5){
        m++
        continue
    }

    console.log(m+1)
    m++

}while(m<10)

// forEach

let array =[4,6,5,3,8,7]

array.forEach(function(element){
    console.log(element)
})

// for print more than one argument in forEach loop
let arr1=[2,4,5,6,true,false,'hey','you']


arr1.forEach(function(element,index,array){
    console.log(element,index,array)
})

// if forEach is not a function

let arr=[2,4,5,6,7,8]

for(let y=0; y< arr.length; y++){
    const element= arr[y]
    console.log(element)
}


let object ={
    name:'gilfoyle',
    os:'kali',
    type:'java enthusiastic',
    age:34
}

for (let key in object){
    
    console.log(`${key} or object is ${object[key]}`)
}