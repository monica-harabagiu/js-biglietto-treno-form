const prezzoKm = 0.21;
let numeroKm = document.getElementById("numero-km");
let eta = document.getElementById("eta");
let nomePasseggero = document.getElementById("nome")

function calcoloPrezzo() {

    if (eta.value == "minorenne") {
        document.getElementById("prezzo").innerHTML = (0.8 * (prezzoKm * numeroKm.value)).toFixed(2) + " " + "€";
        document.getElementById("offerta").innerHTML = "Offerta under 18";
    } else if (eta.value == "over") {
        document.getElementById("prezzo").innerHTML = (0.6 * (prezzoKm * numeroKm.value)).toFixed(2) + " " + "€";
        document.getElementById("offerta").innerHTML = "Offerta over 65";
    } else {
        document.getElementById("prezzo").innerHTML = (prezzoKm * numeroKm.value).toFixed(2) + " " + "€";
        document.getElementById("offerta").innerHTML = "Biglietto Standard";
    }

    document.getElementById("numero-carrozza").innerHTML = numeroCarrozza(1, 8)

    document.getElementById("codice-cp").innerHTML = codiceCp()

    document.getElementById("nome-passeggero").innerHTML = nomePasseggero.value

    document.getElementById("biglietto").style.display = "block";

}

const bottoneHtml = document.getElementById("button-calc");

bottoneHtml.addEventListener("click", calcoloPrezzo)


function numeroCarrozza(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function codiceCp() {
    return Math.floor(Math.random() * 90000 + 10000)
}


const bottoneAnnulla = document.getElementById("annulla");
const refreshPage = () => {
    location.reload();
}

bottoneAnnulla.addEventListener("click", refreshPage)


