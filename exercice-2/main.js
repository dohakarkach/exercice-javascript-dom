
const calculerTTC = (HT) => {
    const TVA = 0.2;
    const prixTVA = HT * TVA;
    return HT + prixTVA;
};

console.log(calculerTTC(100));

function afficherPrix(selecteur, prixHT) {
    let element = document.querySelector(selecteur);
    let prixTTC = calculerTTC(prixHT);

    element.textContent = `HT : ${prixHT} DH · TTC : ${prixTTC} DH`;
}

afficherPrix("#p1", 100);
afficherPrix("#p2", 45);
afficherPrix("#p3", 320);

