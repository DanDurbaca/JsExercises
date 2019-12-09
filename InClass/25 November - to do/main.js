
function buildHTMLBoard(sizeOfBoard)
{
    var myHtmlItem = document.getElementById("container");
    for (lines = 0; lines <sizeOfBoard;lines++)
    {
        newRow = document.createElement("div");
        for(i=0;i<sizeOfBoard;i++)
        {
            newElement = document.createElement("div");
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

function myBoxWasClicked()
{
    var myElement = event.srcElement;
    //myElement.classList.add("bombBox");
    //alert(myElement.address_line);
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

    if ((myElement.address_line+1<nSize)&&(myElement.address_column-1>0))
        bombsAround+= board[myElement.address_line+1][myElement.address_column-1];

    if ((myElement.address_line+1<nSize)&&(myElement.address_column+1<nSize))
        bombsAround+= board[myElement.address_line+1][myElement.address_column+1];
    
    myElement.innerHTML = bombsAround;
    //alert(event.srcElement.id);
    //alert(event.srcElement.id);
    // check THIS 
    // https://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button
}

function generateBoard(sizeOfBoard)
{
    var localBoard = new Array(sizeOfBoard);
    for (var i = 0; i < sizeOfBoard; i++) 
    {
        localBoard[i] = new Array(sizeOfBoard);
        for (j = 0;j<sizeOfBoard;j++)
        {
            localBoard[i][j] = 0;
        }
    }
    return localBoard;    
}

function addBombs(numBombs)
{
    for(i=0;i<numBombs;i++)
    {
        newBombI = Math.floor(Math.random() * 10);
        newBombJ = Math.floor(Math.random() * 10);
        board[newBombI][newBombJ] = 1;
        elem = document.getElementById("myBox_"+ newBombI + '-' + newBombJ);
        elem.classList.add("bombBox");
    }
}

var nSize = 10;
var board = generateBoard(nSize, 10);
buildHTMLBoard(nSize);


console.log(board[2]);
