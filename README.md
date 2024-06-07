# Web_Advanced_Project

## Overzicht
Een website om modellen van auto's te kunnen oplijsten,deleten. 

## Functies

- **Deleten van modellen**
- **Toevoegen van modellen**
- **Oplijsten van modellen**

## Installatie

### Vereisten
- [Node.js](https://nodejs.org/)

### Stappen
1. Clone de repository en navigeer naar de projectdirectory
2. Type: npm install -g json-server
3. Type: json-server --watch data.json
4. Run de live server

## Hoe werkt het
1. Log in met de juiste credentials
2. Via add button kunt u een model toevoegen door een form in te vullen
3. Via de delete button kunt u een model verwijderen
4. Via de logout button kunt u uitloggen

## Technologiën

**Client:** Html, CSS, Javascript

**Server:** Json-server

## Gebruikte libraries
- [Json-server](https://www.npmjs.com/package/json-server)

### Icons

-[Fontawesome](https://fontawesome.com/)

## Gebruikte bronnen en documentatie
- [ChatGPT json-server hulp](https://chatgpt.com/share/88abed44-e8a2-49ca-be48-338487aacd5d)
- [ChatGPT dataToImageUrl functie](https://chatgpt.com/share/f4eff96c-b4ef-4a5a-af66-6767111da3f6)

## Gebruik van concepten
### Elementen selecteren
- Gebruikt in script.js voor het selecteren van DOM-elementen zoals loginForm, logoutButton, dataContainer, etc.
### Elementen manipuleren
- Gebruikt in script.js voor het toevoegen, updaten, en verwijderen van DOM-elementen.
### Event aan een element koppelen
- Gebruikt in script.js voor het koppelen van events aan knoppen zoals loginForm, logoutButton, openModal, closeModal.
### Formulier valideren
- Gebruikt in script.js binnen de loginForm submit event handler voor het valideren van login gegevens.
### Gebruiken van een constante
- Gebruikt in script.js voor constante waarden zoals const modalForm = document.getElementById("modalForm");.
### Gebruiken van template literals
- Gebruikt in script.js voor het dynamisch genereren van HTML-inhoud, zoals bij het toevoegen van nieuwe modellen.
### Destructuring
- Gebruikt in script.js bij het destructuren van objecten zoals { engine, horsepower, "0_to_60": zeroToSixty, top_speed: topSpeed } = item.specs.
### Spread & Rest operator
- Gebruikt in script.js binnen de formData object creatie om objecten te kopiëren en te combineren.
### Iteration over een array
- Gebruikt in script.js binnen de fetchData functie om over de array van modellen te itereren.
### Arrow function
- Gebruikt in script.js voor het schrijven van korte functies, bijvoorbeeld () => { ... }.
### Callback function
- Gebruikt in script.js binnen event listeners zoals addEventListener.
### Promise
- Gebruikt in script.js bij het gebruik van fetch om data op te halen en om te zetten naar JSON.
### Consumer methods
- Gebruikt in script.js voor het verwerken van data binnen then en catch blokken na het maken van een fetch request.
### Async & Await
- Gebruikt in script.js voor het asynchroon ophalen en verwerken van data, zoals in fetchData en dataToevoegen.
### Self executing function
- Gebruikt in script.js bij document.addEventListener("DOMContentLoaded", () => { ... }) om de code uit te voeren zodra de DOM is geladen.
### Fetch om data op te halen
- Gebruikt in script.js binnen de fetchData functie om data van de server op te halen.
### JSON manipuleren en weergeven
- Gebruikt in script.js bij het ophalen, toevoegen, en verwijderen van modellen.
### Basis CSS Animatie
- Gebruikt in styles.css voor de laadanimatie met keyframes (@keyframes spin).
### Gebruiken van een flexbox of CSS grid
- Gebruikt in styles.css om lay-out en positionering te beheren, bijvoorbeeld in #loginPagina en #datacontainer.
### Gebruik van LocalStorage
- Gebruikt in script.js om login status op te slaan en te controleren met localStorage.setItem en localStorage.getItem.


## Auteur
- [@Senne Clauwaert](https://github.com/clauwaesenne)