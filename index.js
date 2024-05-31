const APIKey = "58ebb3ff1cf28bab62fa83a63de5a348"; //error: "invalid API key"- added $ and got rid of city name, used city instead, changed API key to APIkey

const cityLocation = document.getElementById("location");
const cityTemp = document.getElementById("temperature");

fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)    //error: 404 city not found;
.then (response => response.json())
.then (data => console.log(data))
.catch (error => console.error('Error: ', error));


const weatherBackground = document.getElementById("weatherPage");
const weatherStatus = document.getElementById("weather");

function changeBackgroundImage(){
    let weatherStatus = "RAIN";

    //sunny 
    if (weatherStatus == "SUNNY"){
        weatherBackground.style.backgroundImage = "url('images/bluesky-sunny.jpg')";
        document.getElementById("weather").innerHTML = "SUNNY";
        // break;

    }
    //cloudy
    if (weatherStatus == "CLOUDY"){
        weatherBackground.style.backgroundImage = "url('images/cloudy.jpg')";
        // images/cloudy-gif.mp4'
        document.getElementById("weather").innerHTML = "CLOUDY";
        //break;
    }
    //rainy
    if (weatherStatus == "RAIN"){
        weatherBackground.style.backgroundImage = "url('images/rainy.jpg')";
        document.getElementById("weather").innerHTML = "RAIN";
        //break;
    }
    //stormy
    if (weatherStatus == "STORM"){
        weatherBackground.style.backgroundImage = "url('images/storm-lightning.jpg')";
        document.getElementById("weather").innerHTML = "SEVERE THUNDER WARNING";
        window.alert("SEVERE THUNDERSTORM WARNING in effect for your area. Take shelter in a sturdy building, away from windows. Flying debris may be deadly to those caught without")
        //break;
    }
    //tornado
    if (weatherStatus == "TORNADO"){
        weatherBackground.style.backgroundImage = "url('images/tornado-watch.jpg')";
        document.getElementById("weather").innerHTML = "TORNADO WARNING";
        window.alert("TORNADO WARNING in effect for your area. Take shelter now in a basement or an interior room on the lowest floor of a sturdy building.")
        //break;
    }
    if (weatherStatus == "FOGGT"){
        weatherBackground.style.backgroundImage = "url(' ')";
        document.getElementById("weather").innerHTML = "FOGGY";
        //break;
    }
    if (weatherStatus == "SNOW"){
        weatherBackground.style.backgroundImage = "url(' ')";
        document.getElementById("weather").innerHTML = "SNOW";
        //break;
    }
    if (weatherStatus == "WINDY"){
        weatherBackground.style.backgroundImage = "url(' ')";
        document.getElementById("weather").innerHTML = "WINDY";
        //break;
    }
}
