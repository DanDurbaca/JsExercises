function ReadAndAlertRadio()
{
    /*//alert("we are ok");
    if (document.getElementById("male").checked == true)
    {
        alert(document.getElementById("male").value)
    }

    if (document.getElementById("female").checked == true)
    {
        alert(document.getElementById("female").value)
    }

    if (document.getElementById("notspecified").checked == true)
    {
        alert(document.getElementById("notspecified").value)
    }

    if (document.getElementById("male").checked==false &&
        document.getElementById("female").checked==false &&
        document.getElementById("notspecified").checked ==false)
    {
        alert("nothing is selected");
    }
*/
    let element = document.getElementById("whatever");
    element.style.backgroundColor="rgb(155, 102, 102)"; 
}


function buildCSSColor(r,g,b)
{
    let retVal = "rgb(" + r + "," + g + "," + b +")";

    return retVal;
}

//var boxIsChangingColors = false;

function StartChangingColors()
{
    //let MyElement = document.getElementById("ColoredBox");
    let MyElements = document.querySelectorAll(".bla");
    let a = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let c = Math.floor(Math.random()*255);
    let myStringColor =  buildCSSColor(a,b,c);
    console.log(myStringColor);

    /*
    for (let i = 0; i < MyElements.length; i++) {
        MyElements[i].style.backgroundColor = myStringColor;
    } */
  
    for (t of MyElements){
        t.style.backgroundColor = myStringColor;
    }
}
