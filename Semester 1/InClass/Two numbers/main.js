
function StartComputing()
{
    var m = prompt("Give me m ");
    var n = prompt("Give me n ");

    m = Number(m);
    n = Number(n);

    var out = 0;
    for(i = m+1;i<n;i++)
    {
        out = out + i;
    }

    var par = document.getElementById("Result");
    par.innerHTML = out;
}