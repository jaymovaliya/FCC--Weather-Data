$(document).ready(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;


            /*document.getElementById("lat").innerHTML = lat;
              document.getElementById("lon").innerHTML = lon;*/
            $.ajax({
                url: "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon,
                dataType: 'json',
                success: function (response) {
                    document.getElementById("cur").innerHTML = response.name + "," + response.sys.country;
                    document.getElementById("weather").innerHTML = "<b>Weather </b>" + response.weather[0]["description"];
                    tem = response.main.temp;
                    document.getElementById("temp").innerHTML = "<b>Temperature: </b>" + response.main.temp + " Celsius";
                    document.getElementById("wind").innerHTML = "<b>Wind Speed:</b> " + response.wind.speed + " Km/h";
                    document.getElementById("icon").src = response.weather[0]["icon"];
                }

            });
        });
    } else {
        document.getElementById("lat").innerHTML = "Geolocation is not supported by this browser.";
    }
    $("#far").click(function () {
        f = (9 / 5) * tem + 32;
        document.getElementById("temp2").innerHTML = "<b>Temperature: </b>" + f + " Fahrenheit";
        $("#far").hide();
    });
});
