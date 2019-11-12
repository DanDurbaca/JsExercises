var myHtmlItem = document.getElementById("container");

var myYellowBox = '<div class="box yellowBox"></div>';
var myGreenBox = '<div class="box greenBox"></div>';

var result ="";
for(i=0;i<5;i++)
{
    result = result + myYellowBox;
    result = result + myGreenBox;
}
myHtmlItem.innerHTML = result;
//myYellowBox + myGreenBox + myYellowBox + myGreenBox;
