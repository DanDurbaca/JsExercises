var a = 'a009999';

function IncrementLastNumOfString(someTest)
{
    n = someTest.length-1; // start at the end of the string
    while(n>=0 && someTest[n]>='0' && someTest[n]<='9')
        n--; // go backwards
    n++; // last value was not ok - go forward once !
    stringPart = someTest.substring(0, n); // this is the string part of the input
    numericPart = someTest.substring(n); // this is the number part
    numericPartLen = numericPart.length; // keep this length in a var
    num = eval(numericPart)+1; // inc
    backNum = num.toString(); // transform back to a string
    while(backNum.length<numericPartLen) // we still need the add 0s in front
        backNum = '0'+backNum; 

    return stringPart + backNum;
}

console.log(a);
console.log(IncrementLastNumOfString(a));