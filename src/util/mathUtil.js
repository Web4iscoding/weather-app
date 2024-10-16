import { format } from "date-fns";

function Mod(x, n) {
    return (x % n + n) % n;
}

function RoundToOneDP(x) {
    return (Math.round(x * 10) / 10).toFixed(1);
}

function CelsiusConvert(F) {
    return (F - 32) * 5 / 9 ;
}

export { Mod, RoundToOneDP, CelsiusConvert };