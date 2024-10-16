import { getData } from "./fetchRequestedData";
import { safeAsync } from "./errorHandler";

async function getWeatherData(keyword) {
    const safeGetData = safeAsync(getData, keyword)
    const data = await safeGetData(keyword);
    return {
        currentConditions: data.currentConditions.conditions,
        currentTemp: data.currentConditions.temp,
        currentTime: data.currentConditions.datetime,
        currentIcon: data.currentConditions.icon,
        place: data.resolvedAddress,
        days: data.days.map(reducingDayItems)
    };
}

function reducingDayItems(day) {
    return {
        datetime: day.datetime,
        tempMax: day.tempmax,
        tempMin: day.tempmin,
        temp: day.temp,
        conditions: day.conditions,
        visibility: day.visibility,
        sunset: day.sunset,
        sunrise: day.sunrise,
        windspeed: day.windspeed,
        winddir: day.winddir,
        precip: day.precip,
        pressure: day.pressure,
        icon: day.icon,
        hours: day.hours.map(reducingHourItems)
    };
}

function reducingHourItems(hour) {
    return {
        hour: hour.datetime,
        temp: hour.temp,
        icon: hour.icon
    };
}

export default getWeatherData;