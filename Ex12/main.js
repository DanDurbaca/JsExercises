var mString = prompt("Please enter a value for m ");
var nString = prompt("Please enter a value for n ");
var m = Number(mString);
var n = Number(nString);

if (m>n)
{
    var temp = m;
    m = n;
    n = temp;
}

if (m==n)
{
    console.log("The numbers you have entered are equal !!");
}

for (var i = m+1; i<n;i++)
{
    console.log(i);
}

