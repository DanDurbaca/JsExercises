"use strict";

function buildHTMLBoard(sizeOfBoard)
{
    let myHtmlItem = document.getElementById("container");
    for (let lines = 0; lines <sizeOfBoard;lines++)
    {
        let newRow = document.createElement("div");
        for(let i=0;i<sizeOfBoard;i++)
        {
            let newElement = document.createElement("div");
            
            newElement.classList.add("box");
            newElement.classList.add("yellowBox");
            newElement.id = "myBox_" + lines + '-' + i;
            newElement.address_line = lines;
            newElement.address_column = i;
            newElement.addEventListener("click",myBoxWasClicked);
            newRow.appendChild(newElement);
        }
        myHtmlItem.appendChild(newRow);
    }
}


function start_colouring(iPos,jPos)
{

}

function myBoxWasClicked()
{
    let myElement = event.srcElement;
    let bombsAround = 0;
    if (!visitedBoard[myElement.address_line][myElement.address_column])
    {
        visitedBoard[myElement.address_line][myElement.address_column] = 1;

        if (myElement.address_line-1>=0)
            bombsAround+= board[myElement.address_line-1][myElement.address_column];

        if ((myElement.address_line-1>=0) && (myElement.address_column-1>=0))
            bombsAround+= board[myElement.address_line-1][myElement.address_column-1];

        if ((myElement.address_line-1>=0) && (myElement.address_column+1<nSize))
            bombsAround+= board[myElement.address_line-1][myElement.address_column+1];

        if (myElement.address_column+1<nSize)
            bombsAround+= board[myElement.address_line][myElement.address_column+1];

        if (myElement.address_column-1>=0)
            bombsAround+= board[myElement.address_line][myElement.address_column-1];

        if (myElement.address_line+1<nSize)
            bombsAround+= board[myElement.address_line+1][myElement.address_column];

        if ((myElement.address_line+1<nSize)&&(myElement.address_column-1>=0))
            bombsAround+= board[myElement.address_line+1][myElement.address_column-1];

        if ((myElement.address_line+1<nSize)&&(myElement.address_column+1<nSize))
            bombsAround+= board[myElement.address_line+1][myElement.address_column+1];

        switch (bombsAround){
            case 0: myElement.classList.add("greenBox");
            break;
            case 1: myElement.classList.add("blueBox");
            break;
            case 2: myElement.classList.add("orangeBox");
            break;
            case 3: myElement.classList.add("redBox");
            break;
        }

        
        // trigger around:
        setTimeout(function() {triggerCell(myElement.address_line+1,myElement.address_column);}, 100);
        setTimeout(function() {triggerCell(myElement.address_line-1,myElement.address_column);}, 100);
        setTimeout(function() {triggerCell(myElement.address_line,myElement.address_column+1);}, 100);
        setTimeout(function() {triggerCell(myElement.address_line,myElement.address_column-1);}, 100);

    }
}

function triggerCell(i,j)
{
    let elem = document.getElementById("myBox_" + i + '-' + j);
    elem.click();
}

/*
function myBoxWasClicked()
{
    var myElement = event.srcElement;
    var bombsAround = 0;
    if (myElement.address_line-1>=0)
        bombsAround+= board[myElement.address_line-1][myElement.address_column];

    if ((myElement.address_line-1>=0) && (myElement.address_column-1>=0))
        bombsAround+= board[myElement.address_line-1][myElement.address_column-1];

    if ((myElement.address_line-1>=0) && (myElement.address_column+1<nSize))
        bombsAround+= board[myElement.address_line-1][myElement.address_column+1];

    if (myElement.address_column+1<nSize)
        bombsAround+= board[myElement.address_line][myElement.address_column+1];

    if (myElement.address_column-1>=0)
        bombsAround+= board[myElement.address_line][myElement.address_column-1];

    if (myElement.address_line+1<nSize)
        bombsAround+= board[myElement.address_line+1][myElement.address_column];

    if ((myElement.address_line+1<nSize)&&(myElement.address_column-1>=0))
        bombsAround+= board[myElement.address_line+1][myElement.address_column-1];

    if ((myElement.address_line+1<nSize)&&(myElement.address_column+1<nSize))
        bombsAround+= board[myElement.address_line+1][myElement.address_column+1];
    
    myElement.innerHTML = bombsAround;
    //alert(event.srcElement.id);
    //alert(event.srcElement.id);
    // check THIS 
    // https://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button
}*/

function generateBoard(sizeOfBoard)
{
    let localBoard = new Array(sizeOfBoard);
    for (let i = 0; i < sizeOfBoard; i++) 
    {
        localBoard[i] = new Array(sizeOfBoard);
        for (let j = 0;j<sizeOfBoard;j++)
        {
            localBoard[i][j] = 0;
        }
    }
    return localBoard;    
}

function addBombs(numBombs)
{
    for(let i=0;i<numBombs;i++)
    {
        let newBombI = Math.floor(Math.random() * nSize);
        let newBombJ = Math.floor(Math.random() * nSize);
        board[newBombI][newBombJ] = 1;
        //let elem = document.getElementById("myBox_"+ newBombI + '-' + newBombJ);
        //elem.classList.add("bombBox");
    }
}

var nSize = 40;
var board = generateBoard(nSize, 10);
var visitedBoard = generateBoard(nSize, 10);
buildHTMLBoard(nSize);


function testColorChange(elem)
{
    elem.classList.add("greenBox");
}

//console.log(board[2]);
