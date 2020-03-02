console.log("Hello world in console");

function clickedButtonToAddItem(){
    let myInput = document.getElementById("myInput");
    console.log(myInput.value);
    let mySelect = document.getElementById("cars");

    let newOption = document.createElement("option");
    newOption.innerHTML = myInput.value;
    mySelect.appendChild(newOption);
}


function selectChanged()
{
    console.log("You changed the color");
    let mySelect = document.getElementById("colors");
    let myBox = document.getElementById("box");

    myBox.classList.remove("blueColor");
    myBox.classList.remove("yellowColor");
    myBox.classList.remove("redColor");

    console.log(mySelect.value);
    myBox.classList.add(mySelect.value);
/*
    if (mySelect.selectedIndex==1)
    {
        myBox.classList.add("redColor");
    }

    if (mySelect.selectedIndex==2)
    {
        myBox.classList.add("yellowColor");
    }

    if (mySelect.selectedIndex==3)
    {
        myBox.classList.add("blueColor");
    }*/

}