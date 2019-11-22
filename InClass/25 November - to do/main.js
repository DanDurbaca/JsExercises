var myHtmlItem = document.getElementById("container");

var result ="";

for (lines = 0; lines <10;lines++)
{
    result = result + "<div>";
    for(i=0;i<10;i++)
    {
        if (lines%2===1)
        {
            if (i%2==1)
            {
                result = result + BuildBox(lines,i,"greenBox");
            }
            else
            {
                result = result + BuildBox(lines,i,"yellowBox");
            }
        }
        else
        {
            if (i%2==0)
            {
                result = result + BuildBox(lines,i,"greenBox");
            }
            else
            {
                result = result + BuildBox(lines,i,"yellowBox");
            }
        }
    }
    result = result + "</div>";
}
myHtmlItem.innerHTML = result;

function BuildBox(line,col,colorOfBox)
{
    //alert(this.id);
    
    var idOfThisBox = "myBox_" + line + '-' + col;
    var result='<div id="'; // add the id of the box
    result += idOfThisBox; // finish adding the id
    result += '" class="box ' + colorOfBox + '"'; // add the classes
    // start building the onClick event for each box
    // it should result in a string like:
    // onclick="myBoxWasClicked('green');"
    result += ' onclick="myBoxWasClicked(';
    result += "'"+idOfThisBox + "');";
    result += '"'; // end of the onClick event

    // finish the HTML tag
    result += '></div>';
    return result;
}
