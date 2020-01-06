"use strict";


var clockRunning = null;


function changeClock() {
    let divElement = document.getElementById("myClock"); // get the DIV element
    let secondsCount = Number(divElement.innerHTML); // get the contents and transform them to a NUMBER

    let pressedButtons = document.getElementsByClassName("pressedButton");
    if (pressedButtons.length == 1) {
        if (pressedButtons[0].innerHTML == "Up") {
            secondsCount++; // increase the seconds
        }

        if (pressedButtons[0].innerHTML == "Down") {
            secondsCount--; // increase the seconds
        }
        divElement.innerHTML = secondsCount;

        if ((pressedButtons[0].innerHTML == "Up") || (pressedButtons[0].innerHTML == "Down")) {
            clockRunning = setTimeout(changeClock, 1000);
        } else {
            if (clockRunning != null) {
                clearTimeout(clockRunning);
            }
            clockRunning = null;
        }
    }
}


function buttonPressed(elementPressed) {
    let allButtons = document.getElementsByClassName("buttonRegular");
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove("pressedButton");
    }
    elementPressed.classList.add("pressedButton");
    if (clockRunning != null) {
        clearTimeout(clockRunning);
        clockRunning = null;
    }
    changeClock();
}