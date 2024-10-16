import { toggle, loading } from "./animations";
import clearData from "./clearData";
import loadData from "./loadData";
import { cacheWeatherData } from "../processRequestedData";

let toggled = false;
let toggleEntity;

export function dayButtonState(daySelected) {
    let index;
    const weatherData = JSON.parse(sessionStorage.getItem("weatherData"));

    for (let i = 0; i < weatherData.days.length; i++) {
        const day = weatherData.days[i];
        if (daySelected.querySelector(".days-card-date").textContent !== "Today" && day.datetime === daySelected.querySelector(".days-card-date").textContent) {
            index = i;
            break;
        }
        else if (daySelected.querySelector(".days-card-date").textContent === "Today") {
            index = 0;
            break;
        }
    }
    sessionStorage.setItem("currentWeatherData", index);
    clearData();
    if(toggled)
        loadData("C");
    else
        loadData("F");
}

export default function setStates() {

    addEventListener("load", () => {
        sessionStorage.setItem("currentWeatherData", 0)
        toggleEntity = toggle();
        loading();
    });

    document.querySelector(".toggle").addEventListener("click", () => {
        if (toggled) {
            toggleEntity.setDirection(-1);
        }
        else {
            toggleEntity.setDirection(1);
        }
        toggleEntity.play()
        toggled = toggled ? false : true;
        clearData();
        if(toggled)
            loadData("C");
        else
            loadData("F");
    });

    document.querySelector(".search input").addEventListener("focus", (e) => {
        document.querySelector(".search input").addEventListener("keydown", e2 => {
            if (e2.key === "Enter") {
                sessionStorage.setItem("currentAddress", e.target.value);
                location.reload();
            }
        })
    })

    document.querySelector(".search img").addEventListener("click", (e) => {
        sessionStorage.setItem("currentAddress", e.target.nextElementSibling.value);
        location.reload();
    })
}