"use strict";

const GRID_SIZE = 75; // define a grid of 75 x 75 cells
let myContainer = document.getElementById("container");

/*
var matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];*/


function buildEmptyMatrix(size) {
    let myMatrix = new Array();
    for (let i = 0; i < size; i++) {
        let newRow = new Array();
        for (let j = 0; j < size; j++) {
            newRow.push(0);
        }
        myMatrix.push(newRow);
    }
}


for (let i = 0; i < GRID_SIZE; i++) {
    let newRow = document.createElement("div");
    for (let j = 0; j < GRID_SIZE; j++) {
        let myNewCell = document.createElement("div");
        myNewCell.classList.add("cell");
        newRow.appendChild(myNewCell);
        myNewCell.addEventListener("click", cellClicked);
    }
    myContainer.appendChild(newRow);
}

function cellClicked() {
    let myClickedCell = event.srcElement;

    //myClickedCell.classList.toggle("cellAlive");

    /*
    The above code is PERFECTLY equivalent to the following code:
    */

    if (myClickedCell.classList.contains("cellAlive")) {
        myClickedCell.classList.remove("cellAlive");
    } else {
        myClickedCell.classList.add("cellAlive");
    }
}