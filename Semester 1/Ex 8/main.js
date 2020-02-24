function startCode() {
    var m = -50;
    var a = 4;

    document.getElementById("dataHere").innerHTML+="We used m = "+m+"<br>";
    for (; m !== 0;){
        if (m > 0) {
            document.getElementById("dataHere").innerHTML += m + "<br>";
            m--;
        }
        else{
            document.getElementById("dataHere").innerHTML += m + "<br>";
            m++;
        }
        
    }
}
