//Class and Id 
//a class can be in multiple but a id is a specific name
// for particular element thats why it is only one

let a= document;

console.log(a)


a= document.all ;// shows all the html tags

a=document.body //shows all element of body

a=document.forms // shows to access the form tag


// let a =document;
// Array.form(a) means form an array using a(assigned value  )

// so basically array.form make a collection of element using html tags


Array.form(a).forEach(function(element){
    console.log(element)
})

console.log(a);


// for getting all the link from the web page

a=document.links; // it give link along with html
a=document.links.href // it give just the link

a=document.link[0] // to access the specific link


// document and scripts
document.images
document.scripts

/*
a = document.images;
Array.from(a).forEach(function(element){
    console.log(element)});

b = document.scripts;
Array.from(b).forEach(function(element){
    console.log(element)});

*/