//Function in Javascript


let nirvana ='  "billboards1" '
function song(nirvana,comment='till rocking'){

    console.log(`Smell like a teen spirit${nirvana} ${comment}`)

    //return 69; this will print line 25th val
}


//here we are calling the function
song(nirvana,'is awesome')

song(nirvana,'greatest of all time')




//if we doesn't pass any function then it takes a default value
let val =song(nirvana);


console.log(val)  //it returning a value





function band2(ac,ad='black in the black'){
    let music=  ` 
    Back in black, I hit the sack
    I've been too long, I'm glad to be back
    Yes, I'm let loose from the noose
    That's kept me hanging about
    I'm just looking at the sky 'cause it's getting me high
    Forget the hearse, 'cause I'll never die
    I got nine lives, cat's eyes
    Abusing every one of them and running wild
    
    'Cause I'm back, yes I'm back
    Well, I'm back, yes I'm back
    Well, I'm back, back
    Well, I'm back in black
    Yes, I'm back in black!!!`;
    

    return music;
}

band2(music)

//********8skip*******