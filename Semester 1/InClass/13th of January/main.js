"use strict";

/*
var matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];*/

const GRID_SIZE = 20; // define a grid of 75 x 75 cells

let matrixData = buildEmptyMatrix(GRID_SIZE);
matrixData[1][1] = 1;
UpdateDisplay(matrixData);


function goNext() {
    let newMatrixData = buildNewState(matrixData);
    matrixData = newMatrixData;
    UpdateDisplay(matrixData);
}

function buildNewState(oldStateData) {
    let size = oldStateData.length;
    let newStateData = buildEmptyMatrix(size);
    /*
        Any live cell with two or three neighbors survives.
        Any dead cell with three live neighbors becomes a live cell.
        
        IMPLEMENTED BY DEFAULT:
        All other live cells die in the next generation. Similarly, all other dead cells stay dead.
    */
    for (let i = 1; i < size - 1; i++)
        for (let j = 1; j < size - 1; j++) {
            let neighborsAlive = 0;
            neighborsAlive += oldStateData[i - 1][j - 1];
            neighborsAlive += oldStateData[i - 1][j];
            neighborsAlive += oldStateData[i - 1][j + 1];
            neighborsAlive += oldStateData[i][j - 1];
            neighborsAlive += oldStateData[i][j + 1];
            neighborsAlive += oldStateData[i + 1][j - 1];
            neighborsAlive += oldStateData[i + 1][j];
            neighborsAlive += oldStateData[i + 1][j + 1];
            if (oldStateData[i][j] == 1) {
                if ((neighborsAlive == 2) || (neighborsAlive == 3))
                    newStateData[i][j] = 1;
            } else {
                if (neighborsAlive == 3)
                    newStateData[i][j] = 1;
            }
        }
    return newStateData;
}

function UpdateDisplay(matrixToShow) {

    let myContainer = document.getElementById("container");
    myContainer.innerHTML = "";

    for (let i = 0; i < GRID_SIZE; i++) {
        let newRow = document.createElement("div");
        for (let j = 0; j < GRID_SIZE; j++) {
            let myNewCell = document.createElement("div");
            myNewCell.classList.add("cell");
            myNewCell.rowPos = i;
            myNewCell.colPos = j;
            if (matrixToShow[i][j] == 1)
                myNewCell.classList.add("cellAlive");
            newRow.appendChild(myNewCell);
            myNewCell.addEventListener("click", cellClicked);
        }
        myContainer.appendChild(newRow);
    }
}



function buildEmptyMatrix(size) {
    let myMatrix = new Array();
    for (let i = 0; i < size; i++) {
        let newRow = new Array();
        for (let j = 0; j < size; j++) {
            newRow.push(0);
        }
        myMatrix.push(newRow);
    }
    return myMatrix;
}




function cellClicked() {
    let myClickedCell = event.srcElement;

    myClickedCell.classList.toggle("cellAlive");
    matrixData[myClickedCell.rowPos][myClickedCell.colPos] = (matrixData[myClickedCell.rowPos][myClickedCell.colPos] + 1) % 2;

    /*
    The above code is PERFECTLY equivalent to the following code:
    

    if (myClickedCell.classList.contains("cellAlive")) {
        myClickedCell.classList.remove("cellAlive");
        matrixData[myClickedCell.rowPos][myClickedCell.colPos] = 0;
    } else {
        myClickedCell.classList.add("cellAlive");
        matrixData[myClickedCell.rowPos][myClickedCell.colPos] = 1;
    }*/
}