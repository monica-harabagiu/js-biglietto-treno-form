const prezzoKm = 0.21;
let numeroKm = document.getElementById("numero-km");
let eta = document.getElementById("eta");

function calcoloPrezzo() {

    if (eta.value < 18) {
        document.getElementById("prezzo").innerHTML = (0.8 * (prezzoKm * numeroKm.value)).toFixed(2) + " " + "€";
    } else if (eta.value >= 65) {
        document.getElementById("prezzo").innerHTML = (0.6 * (prezzoKm * numeroKm.value)).toFixed(2) + " " + "€";
    } else {
        document.getElementById("prezzo").innerHTML = (prezzoKm * numeroKm.value).toFixed(2) + " " + "€";
    }
}

const bottoneHtml = document.getElementById("button-calc");

bottoneHtml.addEventListener("click", calcoloPrezzo)
