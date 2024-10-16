export default function() {
    document.querySelector(".header-date").textContent = "";
    document.querySelector(".header-info-address").textContent = "";
    document.querySelector(".header-info-condition").textContent = "";
    document.querySelector(".header-info-temp").textContent = "";
    document.querySelector(".header-info-right div").innerHTML = "";
    document.querySelector(".hours").innerHTML = "";
    document.querySelector(".days").innerHTML = "";
    document.querySelector(".visibility > *").innerHTML = "";
    document.querySelector(".sunrise > *").innerHTML = "";
    document.querySelector(".sunset > *").innerHTML = "";
    document.querySelector(".wind-speed > *").innerHTML = "";
    document.querySelector(".wind-dir > *").innerHTML = "";
    document.querySelector(".precip > *").innerHTML = "";
    document.querySelector(".pressure > *").innerHTML = "";
};