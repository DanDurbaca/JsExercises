"use strict;"

function Compute()
{
    let xElem = document.getElementById("xValue");
    let x = xElem.value;    
    // x^3 + x^2 - x + 1
    let output = document.getElementById("container");
    let result = x*x*x + x*x - x + 1;
    output.innerHTML = result;
    
}