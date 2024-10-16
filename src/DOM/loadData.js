import loadHeader from "./loadHeader";
import loadHours from "./loadHours";
import loadDays from "./loadDays";
import loadMisc from "./loadMisc";

export default function loadData(tempMetric) {
    loadHeader(tempMetric);
    loadHours(tempMetric);
    loadDays(tempMetric);
    loadMisc();
}