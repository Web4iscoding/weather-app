import createDaysCard from "./createDaysCard";
import loadAnimation from "./animations";
import { dayButtonState } from "./states";

export default function(tempMetric) {
    const weatherData = JSON.parse(sessionStorage.getItem("weatherData"));
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

    const daysContainer = document.querySelector(".days");
    for (let i = 0; i < weatherData.days.length; i++) {
        const daysCard = createDaysCard();
        const item = weatherData.days[i];
        daysCard.querySelector(".days-card-date").textContent = weatherData.days.indexOf(item) === 0 ? "Today" : item.datetime;
        loadAnimation(item.icon, daysCard.querySelector(".days-card-icon")).setSpeed(.8);
        daysCard.querySelector(".days-card-temp").textContent = temp.days[i].tempMax + metric + " / " + temp.days[i].tempMin + metric;
        daysContainer.appendChild(daysCard);

        daysCard.addEventListener("click", () => {dayButtonState(daysCard)});
    }
};