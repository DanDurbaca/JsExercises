"use strict";

//var c = 2;
for(let i=0;i<2;i++)
{
    console.log(i);
}

// let vs var !!!
// console.log(i);



function changeClock()
{
    let divElement = document.getElementById("myClock"); // get the DIV element
    let secondsCount = Number(divElement.innerHTML); // get the contents and transform them to a NUMBER
    secondsCount--; // decrease the seconds
    divElement.innerHTML = secondsCount; 
    if (secondsCount>55)
    {
        setTimeout(changeClock,1000);
    }    
}

setTimeout(changeClock,1000);
