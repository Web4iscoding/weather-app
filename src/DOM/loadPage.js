import { cacheWeatherData } from "../processRequestedData";
import { loading } from "./animations";
import loadData from "./loadData";
import setStates from "./states";

export default function(keyword) {
    if(!keyword) {
        keyword = "hong kong"
    }
    setStates();
    cacheWeatherData(keyword).then(() => {
        document.querySelector(".grid").style.display = "grid";
        loading().destroy();
        document.querySelector(".loading").style.display = "none";
        loadData("F");
    })
}
