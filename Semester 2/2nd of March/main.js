
function AddCity(cityToAdd)
{
    let myCities = document.getElementById("cities");
    
    let oneCity = document.createElement("option");
    oneCity.innerHTML = cityToAdd;
    myCities.appendChild(oneCity);
}

function CityChanged()
{
    let myImgOfTheCity = document.getElementById("currentImage");
    myImgOfTheCity.classList.remove("hidden");
    myImgOfTheCity.src= "rome.jfif";
}

function CountryChanged()
{
    let myCities = document.getElementById("cities");
    myCities.innerHTML = ""; // or null ??
    myCities.classList.remove("hidden"); 
    
    let myCountry = document.getElementById("country");

    let citiesOfItaly = ["Rome","Naples","Milan","Venice"];

    if(myCountry.value == "Italy"){
        for(let i=0;i<citiesOfItaly.length;i++)
        {
            AddCity(citiesOfItaly[i]);
        }
    }

    if(myCountry.value == "Luxembourg"){

       
        }
    
}
