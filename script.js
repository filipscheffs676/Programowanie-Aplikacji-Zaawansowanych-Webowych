const umiejetnosci = [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Git",
    "Praca w zespole"
];

function pokazUmiejetnosci(lista){
    const kontener = document.querySelector("#lista-umiejetnosci");
    for(const nazwa of lista){
        const element = document.createElement("li");
        element.textContent = nazwa;
        kontener.appendChild(element);
    }
}
pokazUmiejetnosci(umiejetnosci);

const formularz = document.querySelector("#formularz-kontakt");
const komunikat = document.querySelector("#komunikat");

function pokazKomunikat(tresc,rodzaj){
    komunikat.textContent = tresc;
    komunikat.classList.remove("blad","sukces");
    komunikat.classList.add(rodzaj);
}
formularz.addEventListener("submit", function(event){
    event.preventDefault();
    const imie = formularz.querySelector("#imie").value.trim();
    const email = formularz.querySelector("#email").value.trim();
    const temat = formularz.querySelector("#temat").value.trim();
    const tresc = formularz.querySelector("#tresc").value.trim();

    
}