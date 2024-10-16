export default function() {
    const daysCard = document.createElement("div");
    daysCard.className = "days-card";
    const daysCardContainer = document.createElement("div");
    daysCardContainer.className = "days-card-container";
    const daysCardDate = document.createElement("div");
    daysCardDate.className = "days-card-date";
    const daysCardIcon = document.createElement("div");
    daysCardIcon.className = "days-card-icon";
    daysCardContainer.appendChild(daysCardDate);
    daysCardContainer.appendChild(daysCardIcon);
    const daysCardTemp = document.createElement("div");
    daysCardTemp.className = "days-card-temp";
    daysCard.appendChild(daysCardContainer);
    daysCard.appendChild(daysCardTemp);

    return daysCard;
};