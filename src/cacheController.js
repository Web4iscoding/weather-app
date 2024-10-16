import { format } from "date-fns";
import { CelsiusConvert, RoundToOneDP} from "./util/mathUtil";

function checkLocalStorage() {
    return JSON.parse(localStorage.getItem("weatherData")).days[0].datetime === format(new Date(), "yyyy/MM/dd");
}

function setSessionStoarge(weatherData) {
    sessionStorage.setItem("weatherData", JSON.stringify(weatherData));
    const temps = {
        currentTemp: RoundToOneDP(weatherData.currentTemp),
        days: weatherData.days.map(i => {
            return {
                tempMax: RoundToOneDP(i.tempMax),
                tempMin: RoundToOneDP(i.tempMin),
                temp: RoundToOneDP(i.temp),
                hours: i.hours.map(j => {
                    return {
                        temp: RoundToOneDP(j.temp)
                    }
                })
            }
        })
    }

    const Ctemps = {
        currentTemp: RoundToOneDP(CelsiusConvert(weatherData.currentTemp)),
        days: weatherData.days.map(i => {
            return {
                tempMax: RoundToOneDP(CelsiusConvert(i.tempMax)),
                tempMin: RoundToOneDP(CelsiusConvert(i.tempMin)),
                temp: RoundToOneDP(CelsiusConvert(i.temp)),
                hours: i.hours.map(j => {
                    return {
                        temp: RoundToOneDP(CelsiusConvert(j.temp))
                    }
                })
            }
        })
    }

    sessionStorage.setItem("tempF", JSON.stringify(temps));
    sessionStorage.setItem("tempC", JSON.stringify(Ctemps));
}

export { checkLocalStorage, setSessionStoarge };