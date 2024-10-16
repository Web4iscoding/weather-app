export default function() {
    const hoursCard = document.createElement("div");
    hoursCard.className = "hours-card";
    const hoursCardTime = document.createElement("div");
    hoursCardTime.className = "hours-card-time";
    const hoursCardIcon = document.createElement("div");
    hoursCardIcon.className = "hours-card-icon";
    const hoursCardTemp = document.createElement("div");
    hoursCardTemp.className = "hours-card-temp";
    hoursCard.appendChild(hoursCardTime);
    hoursCard.appendChild(hoursCardIcon);
    hoursCard.appendChild(hoursCardTemp);

    return hoursCard;
}