import { safeAsync } from "./errorHandler";
import unsafeGetWeatherData from "./getRequestedData";
import * as cc from "./cacheController";

async function cacheWeatherData(keyword) {
    try {
        const getWeatherData = safeAsync(unsafeGetWeatherData, keyword);
        if (keyword)
            cc.setSessionStoarge(await getWeatherData());
    }
    catch(e) {
        console.log(e)
    }

}

export { cacheWeatherData };