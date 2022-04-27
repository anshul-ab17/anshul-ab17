//Manipulating websites using js window object

let a= window;
console.log(a);

// we can also write just alert here also we don't have to 
// write the window cause window is a global variable

// alert 
window.alert('hey')
alert('hello')

//prompt
a =prompt('it is a error, show a conclusion')

// confirm

a=confirm('you sure')
// to see the html document
window.document


// inner height and width


a= window.innerHeight
a= window.innerWidth
console.log(a)

//scrollX and scrollY
a= scrollX
// check the mouse scrolling on a web page


// location of a web page

a= location;
// for reloading page

a= location.reload
// for getting the page link


a= location.href

// for getting location in the form of a string
a=location.toString()


// shows the past history of open page
a=window.history
// or 
a=history
// for getting total history 
a=history.length

// for getting the 2nd page of the history
history.go(2)































































































