
var cache = null;
lastOperation = null;



function someDigitClicked(x) {
    // TWO OPTIONS for finding out that the + was pressed OR NOT:
    /*
    1. Get the + button, check its classname and see if it contains 
    the class turnON
    */
    if (document.getElementById("plus").classList.contains("turnOn")
        ||
        document.getElementById("minus").classList.contains("turnOn")
    ) {
        if (document.getElementById("plus").classList.contains("turnOn"))
            lastOperation = "plus";
        if (document.getElementById("minus").classList.contains("turnOn"))
            lastOperation = "minus";
        resetDisplay();
        cache = Number(document.getElementById("theResult").value);
        document.getElementById("theResult").value = "";
    }
    
    document.getElementById("theResult").value += x;
}

function clearAll() {
    document.getElementById("theResult").value = "";
    cache = null;
    resetDisplay();
}

function doPlus(a,b)
{return a+b;}

function doMinus(a,b)
{return a-b;}

function doNothing(a,b)
{return a;}

function doSomeOperation(objectId,whatToDo)
{
    if (cache != null) 
    {
        if (objectId=="equals")
        {
            switch (lastOperation)
            {
            case "plus":
                whatToDo = doPlus;
                break;
            case "minus":
                whatToDo = doMinus;
                break;
            default:
                whatToDo = doNothing;
            }
        }
        var result = Number(document.getElementById("theResult").value);
        result = whatToDo(cache,result);
        document.getElementById("theResult").value = result;
        cache = null;
        lastOperation = objectId;
    }
    resetDisplay();
    document.getElementById(objectId).classList.add("turnOn");
}

function resetDisplay() {
    document.getElementById("equals").classList.remove("turnOn");
    document.getElementById("plus").classList.remove("turnOn");
    document.getElementById("minus").classList.remove("turnOn");
}
