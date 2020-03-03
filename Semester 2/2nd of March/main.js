
function AddCity(cityToAdd)
{
    let myCities = document.getElementById("cities");
    
    let oneCity = document.createElement("option");
    oneCity.innerHTML = cityToAdd;
    myCities.appendChild(oneCity);
}

function MakeItBigger()
{
    let myImgOfTheCity = document.getElementById("currentImage");
    myImgOfTheCity.style.width = "300px";
    myImgOfTheCity.style.height = "300px";
}

function CityChanged()
{
    let myImgOfTheCity = document.getElementById("currentImage");
    myImgOfTheCity.classList.remove("hidden");
    myImgOfTheCity.src= document.getElementById("cities").value+".jpg";
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

    let citiesOfLuxembourg = ["Luxembourg-city","Esch","Mersch","Ettelbruck"];

    if(myCountry.value == "Luxembourg"){
        for(let i=0;i<citiesOfLuxembourg.length;i++)
        {
            AddCity(citiesOfLuxembourg[i]);
        }
       
        }
    
    let citiesOfRomania = ["Bucharest","Cluj","Arad"];
    if(myCountry.value == "Romania"){
        for(let i=0;i<citiesOfRomania.length;i++)
        {
            AddCity(citiesOfRomania[i]);
        }
       
        }
    let citiesOfVenezuela = ["Caracas","Merida","Valencia"];
        if(myCountry.value == "Venezuela"){
            for(let i=0;i<citiesOfVenezuela.length;i++)
            {
                AddCity(citiesOfVenezuela[i]);
            }
           
            }
}
