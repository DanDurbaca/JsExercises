console.log("Hello world in console");

function clickedButtonToAddItem(){
    let myInput = document.getElementById("myInput");
    console.log(myInput.value);
    let mySelect = document.getElementById("cars");

    let newOption = document.createElement("option");
    newOption.innerHTML = myInput.value;
    mySelect.appendChild(newOption);
}
