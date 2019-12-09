
var cache = null;

function addToMemory(someThing)
{
    document.getElementById("memory").innerHTML = someThing;
}


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
        resetDisplay();
        cache = document.getElementById("theResult").value;
        addToMemory(cache);
        document.getElementById("theResult").value = "";
    }
    
    document.getElementById("theResult").value += x;
}

function reset() {
    document.getElementById("theResult").value = "";
    cache = null;
    addToMemory(cache);

    resetDisplay();
}

function plus() {
    var result = Number(document.getElementById("theResult").value);
    result += Number(cache);
    document.getElementById("theResult").value = result;

    resetDisplay();
    document.getElementById("plus").classList.add("turnOn");
}

function minus() {
    if (cache != null) {
        var result = Number(document.getElementById("theResult").value);
        result = cache - result;
        document.getElementById("theResult").value = result;
        cache = result;
        addToMemory(cache);

    }
    resetDisplay();
    document.getElementById("minus").classList.add("turnOn");
}

function resetDisplay() {
    document.getElementById("plus").classList.remove("turnOn");
    document.getElementById("minus").classList.remove("turnOn");
}
