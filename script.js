const budujListe = (tablica) => 
    tablica.map(({ tytul, strony, dostepna }) => `
        <li class="${dostepna ? "wyrozniony" : ""}">
            ${tytul} - ${strony} stron
        </li>
    `).join("");

const odfiltrowaneDane = ksiazki.filter(({ strony }) => strony > 250);

const lacznaLiczbaStron = odfiltrowaneDane.reduce((suma, { strony }) => suma + strony, 0);

const listaElement = document.querySelector("#lista");
listaElement.innerHTML = budujListe(odfiltrowaneDane);

const podsumowanieElement = document.querySelector("#podsumowanie");
podsumowanieElement.textContent = `Wyświetlono książek: ${odfiltrowaneDane.length}, Łączna liczba stron: ${lacznaLiczbaStron}`;