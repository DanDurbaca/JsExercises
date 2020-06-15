var clicks = 0;
function doSomething() {
    let output = document.getElementById("Results");
    clicks++;
    //OR clicks += 1;
    //OR clicks = clicks + 1;

    output.innerHTML = "Message: " + clicks;
}
