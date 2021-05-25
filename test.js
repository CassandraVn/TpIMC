function calculer() {
    let poids = document.getElementById("poids").value;
    let taille = document.getElementById("taille").value;
    document.getElementById('poids').value=''; // vider l'input
    document.getElementById('taille').value='';

    let imc = poids / (taille*taille);
    document.getElementById('imc').innerHTML = imc.toFixed(1);

    if (imc < 18.5) {
        document.getElementById('tranche').innerHTML = "maigreur";
    }
    else if (imc > 18.5 && imc < 25) {
        document.getElementById('tranche').innerHTML = "normal";
    }
    else if (imc > 25) {
        document.getElementById('tranche').innerHTML = "surpoids";
    }
}
