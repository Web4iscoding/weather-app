import axios from "axios";

async function getData(keyword) {
    let API_key = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${keyword}?unitGroup=us&key=CYV4U4RV9MPVCHZ76VWVYY63Q&contentType=json`;
    const resolved = await axios.get(API_key);
    return resolved.data;
}

export { getData };