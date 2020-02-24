"use strict";


var clockRunning = null;
var currentButtonPressed = 0;
// 0 = STOP
// 1 = Up (or clock +)
// 2 = Down (or clock -)


function changeClock() {
    let divElement = document.getElementById("myClock"); // get the DIV element
    let secondsCount = Number(divElement.innerHTML); // get the contents and transform them to a NUMBER

    let pressedButtons = document.getElementsByClassName("pressedButton");
    if (pressedButtons.length == 1) {
        if (currentButtonPressed == 1) {
            secondsCount++; // increase the seconds
        }

        if (currentButtonPressed == 2) {
            secondsCount--; // increase the seconds
        }
        divElement.innerHTML = secondsCount;

        if (currentButtonPressed >= 1) {
            clockRunning = setTimeout(changeClock, 1000);
        } else {
            if (clockRunning != null) {
                clearTimeout(clockRunning);
            }
            clockRunning = null;
        }
    }
}


function buttonPressed(elementPressed, currentButtonParameter) {
    if (!elementPressed.classList.contains("pressedButton")) {
        currentButtonPressed = currentButtonParameter;
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
}