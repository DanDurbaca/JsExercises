var x = 0;
var y = 1;
var m = 0;

    for (i = 0;; i++) // this is an INFINITE LOOP !!!
    {
        m = x + y;
        x = y;
        y = m;

        if (x >= 1000000) 
        {
            console.log("There are "+ i +" fibonacci numbers");
            break; // we BREAK the loop here !!
        }
        if(x % 2 === 0){
            console.log("Even " +x);
        }
        else {
            console.log(x);
        }

    }


