// const apiKey = "3cf891d4f8f77dfb177e38f3c5c23a98";

// const cityLocation = document.getElementById("location");
// const cityTemp = document.getElementById("temperature");


// console.log(cityTemp);
// console.log(location);

const weatherBackground = document.getElementById("weatherPage");
const weatherStatus = document.getElementById("weather");

function changeBackgroundImage(){
    let weatherStatus = "CLOUDY";

    //sunny 
    if (weatherStatus == "SUNNY"){
        weatherBackground.style.backgroundImage = "url('images/bluesky-sunny.jpg')";
        document.getElementById("weather").innerHTML = "SUNNY";

    }
    //cloudy
    if (weatherStatus == "CLOUDY"){
        weatherBackground.style.backgroundImage = "url('images/cloudy.jpg')";
        document.getElementById("weather").innerHTML = "CLOUDY";

    }
    //rainy
    if (weatherStatus == "RAIN"){
        weatherBackground.style.backgroundImage = "url('images/rainy.jpg')";
        document.getElementById("weather").innerHTML = "RAIN";

    }
    //stormy
    if (weatherStatus == "STORM"){
        weatherBackground.style.backgroundImage = "url('images/storm-lightning.jpg')";
        document.getElementById("weather").innerHTML = "THUNDER STORMS";
        
    }
    //tornado
    if (weatherStatus == "TORNADO"){
        weatherBackground.style.backgroundImage = "url('images/tornado-watch.jpg')";
        document.getElementById("weather").innerHTML = "TORNADO WATCH";

    }
    
}
