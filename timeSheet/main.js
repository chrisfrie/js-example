document.getElementById("myForm").addEventListener("input", rechne);

function rechne() {
    let stunden = document.getElementById('stunden'),
        satz = document.getElementById('sat'),
        mwst = document.getElementById('mwst');

    let summe = stunden.valueAsNumber * satz.valueAsNumber * (1 + mwst.valueAsNumber/100);

    // Die Methode toFixed() erzwingt eine bestimmte Anzahl Nachkommastellen.
    summe = summe.toFixed(2);
    document.getElementById('betrag').value = summe;
}