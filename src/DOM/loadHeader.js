import loadAnimation from "./animations";

export default function(tempMetric) {
    const weatherData = JSON.parse(sessionStorage.getItem("weatherData"));
    const currentIndex = Number(sessionStorage.getItem("currentWeatherData"));
    let temp;
    let metric;
    if (tempMetric === "C") {
        temp = JSON.parse(sessionStorage.getItem("tempC"));
        metric = "°C";
    }
    else if (tempMetric === "F") {
        temp = JSON.parse(sessionStorage.getItem("tempF"));
        metric = "°F";
    }
    if (currentIndex === 0) {
        document.querySelector(".header-date").textContent = "Today";
        document.querySelector(".header-info-address").textContent = weatherData.place;
        document.querySelector(".header-info-condition").textContent = weatherData.currentConditions;
        document.querySelector(".header-info-temp").textContent = temp.currentTemp + metric;
        loadAnimation(weatherData.currentIcon, document.querySelector(".header-info-right div")).setSpeed(.8);
    }
    else {
        document.querySelector(".header-date").textContent = weatherData.days[currentIndex].datetime;
        document.querySelector(".header-info-address").textContent = weatherData.place;
        document.querySelector(".header-info-condition").textContent = weatherData.days[currentIndex].conditions;
        document.querySelector(".header-info-temp").textContent = temp.days[currentIndex].temp + metric;
        loadAnimation(weatherData.days[currentIndex].icon, document.querySelector(".header-info-right div")).setSpeed(.8);
    }
}