function startCode() {
    
    for (var i = 0; i<5; i++){
    // loop for rows !        
        var STR = ""; // start an empty row
        if (i%2==0)
        {        
            STR += "<tr>" // start row tag
        }
        else
        {
            STR += "<tr class = 'yellowCells'>" // start row tag
        }
            for (var x = 0; x<8; x++) 
            { 

                var u = i * x;
                if(x % 2 === 0){
                    STR+="<td class='redCells'>"+u.toString()+"</td>"; // ADD A TD tag, inside the TR
                }
                else {
                    STR+="<td>"+u.toString()+"</td>";
                }
            } // end loop for columns
            STR += "</tr>"; // end row tag -> FINISH the TR


        document.getElementById("myTable").innerHTML+=STR;
    } // end loop for rows
}
