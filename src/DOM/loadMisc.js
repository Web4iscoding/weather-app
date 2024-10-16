import loadAnimation from "./animations";

export default function() {
    const weatherData = JSON.parse(sessionStorage.getItem("weatherData"));
    const selectedDay = weatherData.days[Number(sessionStorage.getItem("currentWeatherData"))];
    document.querySelector(".visibility-data").textContent = selectedDay.visibility + " km";
    loadAnimation("fog", document.querySelector(".visibility-icon"));
    document.querySelector(".sunrise-data").textContent = selectedDay.sunrise;
    loadAnimation("sunrise", document.querySelector(".sunrise-icon"));
    document.querySelector(".sunset-data").textContent = selectedDay.sunset;
    loadAnimation("sunset", document.querySelector(".sunset-icon"));
    document.querySelector(".wind-speed-data").textContent = selectedDay.windspeed;
    loadAnimation("windsock", document.querySelector(".wind-speed-icon"));
    document.querySelector(".wind-dir-data").textContent = selectedDay.winddir;
    loadAnimation("compass", document.querySelector(".wind-dir-icon"));
    document.querySelector(".precip-data").textContent = selectedDay.precip;
    loadAnimation("raindrop-measure", document.querySelector(".precip-icon"));
    document.querySelector(".pressure-data").textContent = selectedDay.pressure;
    loadAnimation("barometer", document.querySelector(".pressure-icon"));
}