import lottie from "lottie-web";
import cloudy from "../asset/fill/lottie/cloudy.json";
import rain from "../asset/fill/lottie/rain.json";
import partlyCloudyNight from "../asset/fill/lottie/partly-cloudy-night.json";
import partlyCloudyDay from "../asset/fill/lottie/partly-cloudy-day.json";
import wind from "../asset/fill/lottie/wind.json";
import clearDay from "../asset/fill/lottie/clear-day.json";
import clearNight from "../asset/fill/lottie/clear-night.json";
import sunrise from "../asset/fill/lottie/sunrise.json";
import sunset from "../asset/fill/lottie/sunset.json";
import compass from "../asset/fill/lottie/compass.json";
import barometer from "../asset/fill/lottie/barometer.json";
import windsock from "../asset/fill/lottie/windsock.json";
import raindropMeasure from "../asset/fill/lottie/raindrop-measure.json";
import fog from "../asset/fill/lottie/fog.json";
import snow from "../asset/fill/lottie/snow.json";
import loadingAsset from "../asset/loading.json";
import toggleAsset from "../asset/toggle.json";


const icons = {
    "rain": rain,
    "cloudy": cloudy,
    "partly-cloudy-night": partlyCloudyNight,
    "partly-cloudy-day": partlyCloudyDay,
    "wind": wind,
    "clear-day": clearDay,
    "clear-night": clearNight,
    "sunrise": sunrise,
    "sunset": sunset,
    "compass": compass,
    "barometer": barometer,
    "windsock": windsock,
    "raindrop-measure": raindropMeasure,
    "fog": fog,
    "snow": snow
}

export function loading() {
    return lottie.loadAnimation({
        container: document.querySelector(".loading"),
        animationData: loadingAsset,
        loop: true,
        autoplay: true,
        renderer: "svg"
    })
}

export function toggle() {
    return lottie.loadAnimation({
        container: document.querySelector(".toggle"),
        animationData: toggleAsset,
        loop: false,
        autoplay: false,
        renderer: "svg"
    })
}

export default function(weatherCondition, containerSelector) {
    return lottie.loadAnimation({
        container: containerSelector,
        animationData: icons[weatherCondition],
        loop: true,
        autoplay: true,
        renderer: "svg"
    })
}