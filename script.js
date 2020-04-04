
$(document).ready(function () { // This will start a jquery values


    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?q=Austin,Texas&appid=bcd5953a34ae60d3a19dd457376dfad5&units=imperial'

    }).then(function (response) {
        for (var i = 0; i < response.list.length; i += 8) {
            console.log(response.list[i]);
        }
    })













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