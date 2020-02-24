var x = 0;
var y = 1;
var m = 0;

    for (i = 0;x<1000000; i++) 
    {
        console.log(x);
        m = x + y;
        x = y;
        y = m;
        
    }
    i--;
    console.log("There are "+ i +" fibonacci numbers");


