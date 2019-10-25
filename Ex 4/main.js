var x = 0;
var y = 1;
var m = 0;
var arr = [];

for (i = 0; i <= 20; i++) {
    m = x + y;
    x = y;
    y = m;
    arr.push(m)
}
console.log(arr);