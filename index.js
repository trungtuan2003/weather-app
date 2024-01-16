const apiKey = "ce3a767d739668f64557752d32e68168";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.getElementById("input__search");
const searchBtn = document.getElementById("input__btn");
const weatherIcon = document.querySelector(".weather__icon");
const errMsg = document.querySelector(".errMsg");
const weather = document.querySelector(".weather");

async function checkWeather(city) {
    const reponse = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (reponse.status === 404){
        errMsg.style.display = "block";
        weather.style.display = "none";
    } 
    else {
        var data = await reponse.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "image/clouds.png";
        }
        else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "image/mist.png";
        }
        else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "image/clear.png";
        }
        else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "image/rain.png";
        }
        else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "image/snow.png";
        }
        else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "image/drizzle.png";
        }
    
        weather.style.display = "block"; 
    }


    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})



