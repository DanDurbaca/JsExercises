
function buildBoard(sizeOfBoard)
{
    var myHtmlItem = document.getElementById("container");
    var result ="";

    for (lines = 0; lines <sizeOfBoard;lines++)
    {
        result = result + "<div>";
        for(i=0;i<sizeOfBoard;i++)
        {
            if ((lines+i)%2===1)
            {
                result = result + BuildBox(lines,i,"greenBox");
            }
            else
            {
                result = result + BuildBox(lines,i,"yellowBox");   
            }
        }
        result = result + "</div>";
    }
    myHtmlItem.innerHTML = result;
}



function BuildBox(line,col,colorOfBox)
{   
    var idOfThisBox = "myBox_" + line + '-' + col;
    var result='<div id="'; // add the id of the box
    result += idOfThisBox; // finish adding the id
    result += '" class="box ' + colorOfBox + '"'; // add the classes
    // start building the onClick event for each box
    // it should result in a string like:
    // onclick="myBoxWasClicked('green');"
    result += ' onclick="myBoxWasClicked();"';
    result += '"'; // end of the onClick event

    // finish the HTML tag
    result += '></div>';
    return result;
}

function myBoxWasClicked()
{
    var myElement = event.srcElement;
    myElement.classList.add("bombBox");
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

buildBoard(nSize);


console.log(board[2]);
