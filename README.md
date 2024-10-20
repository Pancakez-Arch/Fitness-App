# Fitness-App

Nettsiden funker sånn halvveis, booking-siden driver jeg med men ellers så funker den. Jeg må også lage en shop-side.

Nettsiden funker som den skal. Jeg fikk ordnet shop-siden og login og signup sidene funker også.

# Viktige funksjoner

Dette prosjektet benytter flere nøkkelfunksjoner for å håndtere handlekurven og betalingsprosessen. Her er en kort oversikt over hver funksjon og hvordan den brukes:

- **`JSON.parse(localStorage.getItem('cart'))`**: Henter varene i handlekurven fra nettleserens lagring og konverterer dem til en liste. Denne funksjonen brukes for å vise varene i handlekurven på nettstedet.

- **`document.querySelector('.cart-items')`**: Finner HTML-elementet med klassen `cart-items` og returnerer det. Brukes til å vise varene i handlekurven på nettstedet.

- **`document.getElementById('payment-form')`**: Finner HTML-elementet med ID-en `payment-form` og returnerer det. Brukes til å håndtere betalingsskjemaet.

- **`event.preventDefault()`**: Stopper standard betalingsskjemaoppførselen og lar oss håndtere det programmessig. Brukes i betalingsskjema-håndtereren.

- **`localStorage.removeItem('cart')`**: Fjerner varene i handlekurven fra nettleserens lagring. Brukes til å tømme handlekurven etter en vellykket betaling.

- **`showPopup(message)`**: Viser en popup-melding med den angitte teksten. Brukes til å vise en suksessmelding etter at betalingen er behandlet.

## Importerte biblioteker

Dette prosjektet bruker ingen eksterne biblioteker; alle funksjoner er implementert med ren JavaScript.

## Hvordan det fungerer

Her er en oversikt over hvordan prosjektet fungerer:

1. Varene i handlekurven hentes fra nettleserens lagring og vises på nettstedet.
2. Brukeren sender inn betalingsskjemaet, som utløser betalingsskjema-håndtereren.
3. Betalingsskjema-håndtereren validerer kortnummeret og prosesserer betalingen.
4. Hvis betalingen er vellykket, tømmes handlekurven og en suksessmelding vises.
5. Hvis betalingen feiler, vises en feilmelding.
