import createHoursCard from "./createHoursCard";
import loadAnimation from "./animations";

//currentHour is BROKEN!!! FIX IT FAGGOT! damn ok dawg chill

export default function(tempMetric) {
    const weatherData = JSON.parse(sessionStorage.getItem("weatherData"));
    const hoursContainer = document.querySelector(".hours")
    const currentHour = Number(weatherData.currentTime.substring(0, 2));
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

    for(let i = 0; i < weatherData.days[currentIndex].hours.length; i++) {
        const item = weatherData.days[currentIndex].hours[i];
        const hourInt = Number(item.hour.substring(0, 2));
        if (currentHour > hourInt && currentIndex === 0)
            continue;
        const hourCard = createHoursCard();
        hourCard.querySelector(".hours-card-time").textContent = currentHour === hourInt && currentIndex === 0 ? "Now" : hourInt == 0 ? "12 AM" : hourInt < 12 ? hourInt + " AM" : hourInt === 12 ? hourInt + " PM" : hourInt - 12 + " PM";
        loadAnimation(item.icon, hourCard.querySelector(".hours-card-icon")).setSpeed(.8);
        hourCard.querySelector(".hours-card-temp").textContent = temp.days[currentIndex].hours[i].temp + metric;
        hoursContainer.appendChild(hourCard);
    }
};