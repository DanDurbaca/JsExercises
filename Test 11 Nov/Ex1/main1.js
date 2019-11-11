var aString = prompt("Give me A");
var A = Number(aString);

var bString = prompt("Give me B");
var B = Number(bString);

if (A>B)
{
    var sum = 0;
    for(var i = B+1;i<A;i++)
    {
        sum = sum + i;
        console.log(i);
    }
}
else
{
    var sum = 0;
    for(var i = A+1;i<B;i++)
    {
        sum = sum + i;
        console.log(i);
    }
}

