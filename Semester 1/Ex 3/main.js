var i;


for(i = 200; i <= 300; i++){
    if (i % 5 === 0){
        console.log("This is a fiver: "+i);
    }
    else if (i % 8 !== 0){
        console.log("This is a non8er: "+i);
    }
    else{
        console.log(i);
    }
}