
$(document).ready(function () { // This will start a jquery values

function showIcon(icon) { // This function will run through which Icon to show depending on the temperature.
    if (icon === "Rain") {
        return '<i class= fas fa-cloud-rain></i>';
    } else if(icon===  "Sunny")
    return  ' <i class=  fas fa-2x icon></i>';
}


    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?q=Austin,Texas&appid=bcd5953a34ae60d3a19dd457376dfad5&units=imperial' // This ajax call will call the weather api for the city. I use my own gernarted api and I changed the units from kelvin to farenheight.

    }).then(function (response) {  // This will run the responce once the api is genrrated by appendin the result onto the card.
        for (var i = 0; i < response.list.length; i += 8) {  // the for loop will go through respoce list every 3 hours within a 24 hours period to get the weather.
            $('.forecasts').append(
                <div class= "card">
                    <div class= "card-body">
            <h3 class = "card-title"> ${responce.list[i].dt_text}</h3>
            
            $[showIcon(response.weather[0].main)]
            
                        
                        </div> 
                </div>

            );
            console.log(response.list[i]);
        }
    })



}









    /*    var xhttp = new XMLHttpRequest();
    var apiKey = "bcd5953a34ae60d3a19dd457376dfad5";
    var city = 'Austin';

    // wait for the responce from the server
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.state == 200) {   //  this shows the data did not come back with any eoors.
            var data = JSON.parse(this.responceText); // This will print out the data in the console
            console.log(data);
            //temperatures
        }

    };

    // sends the Git Request to the server
    xhttp.opem("GET", `https://api.openweathermap.org/data/2.5/forecast?q=Austin,Texas&appid=bcd5953a34ae60d3a19dd457376dfad5`, true);
    xhttp.send();
});


*/
});