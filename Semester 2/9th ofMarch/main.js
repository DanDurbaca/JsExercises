function ReadAndAlertRadio()
{
    //alert("we are ok");
    if (document.getElementById("male").checked == true)
    {
        alert(document.getElementById("male").value)
    }

    if (document.getElementById("female").checked == true)
    {
        alert(document.getElementById("female").value)
    }

    if (document.getElementById("notspecified").checked == true)
    {
        alert(document.getElementById("notspecified").value)
    }

    if (document.getElementById("male").checked==false &&
        document.getElementById("female").checked==false &&
        document.getElementById("notspecified").checked ==false)
    {
        alert("nothing is selected");
    }
    

}
