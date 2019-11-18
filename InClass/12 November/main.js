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
    var result='<div id="myBox_';
    result += line +'-'+col;
    result += '" class="box ' + colorOfBox + '"></div>';
    return result;
}
