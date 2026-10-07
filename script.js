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
formularz.addEventListener("submit", function (event){
    event.preventDefault();
    const imie = formularz.querySelector("#imie").value.trim();
    const email = formularz.querySelector("#email").value.trim();
    const temat = formularz.querySelector("#temat").value.trim();
    const tresc = formularz.querySelector("#tresc").value.trim();

    if(imie===""){
        pokazKomunikat("Proszę podać imię.","blad");
        return;
    }
    if(email===""){
        pokazKomunikat("Proszę podać adres email.","blad");
        return;
    }
    if(temat===""){
        pokazKomunikat("Proszę podać temat wiadomości.","blad");
        return;
    }
    pokazKomunikat(
        "Dziękuję" +imie+ ". Wiadomość na temat" + temat+ "została przyjęta", 
        "sukces"
    );
    console.log("Dane z formularza:", {
        imie: imie,
        email: email,
        temat: temat,
        tresc: tresc
    });
    formularz.reset();

});

const przycisk = document.querySelector("#przelacznik-motywu");

przycisk.addEventListener("click", function(){
    const jestCiemny = document.body.classList.toggle("ciemny");

    if(jestCiemny){
        przycisk.textContent = "Tryb jasny";
    }
    else{
        przycisk.textContent = "Tryb ciemny";
    }
});