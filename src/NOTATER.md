# Notater

Dokumentasjonssnipper relevant for løsning av oppgaven / ting jeg personlig føler behov for å minnes på.

Utfyllende dokumentasjon finnes på:
* [React Reference: useState](https://react.dev/reference/react/useState)
* [React Reference: useEffect](https://react.dev/reference/react/useEffect)

## useState

`useState` importeres ***utenfor*** komponentfunksjonen, men tilstandsvariabler og oppdateringsfunksjoner hentes ***inne i*** komponentfunksjonen:

```javascript
import { useState } from 'react';

function MyComponent() {
    const [state, setState] = useState("dispair");

    // ...
}
```

### Navnekonvensjon

Variabelnavnene i tilordningen er valgfrie, men følger en navnekonvensjon. Det er også konvensjon å bruke listedestrukturering på illustrert måte.

### Effekter

Å bruke setState funksjonen fører til en ny rendrering av komponentet.

Kjøringen av `useState` ("initsialiseringsfunksjonen") skjer hver gang komponentet rendreres, så vær obs på om dette egentlig er ønsket. Dersom initsialisering ønskes utført bare første gang komponentet lages, kan initialiseringsfunksjonen sendes en funksjonsreferanse istedet for et funksjonskall eller en verdi (`getData` istedet for `getData()` eller `data`). React behandler en funksjonsreferanse annerledes enn en verdi (evt. returverdi).

Når vi bruker vite til å generere en boilerplate React-applikasjon, kjører den i "Strict Mode" og i "Dev Mode". Prosjektet som genereres har App-komponentet sitt plassert i et StrictMode-komponent i `main.jsx`, og når vi kjører vite/react lokalt kjøres det i "Dev Mode".

Under strict-mode/dev-mode, kjøres initialiseringsfunksjoner *to ganger* når React lager et komponent, for å lage synlige problemer hvis vi gjør overnevnte feil. *Dersom noe skjer to ganger som ikke burde, f.ex en teller øker for mye, kan problemet være hvordan tilstanden håndteres ved initsialisering.*

## useEffect

`useEffect` lar oss binde sammen applikasjonens tilstand og eksterne systemer ved at tilstanden overvåkes og kode kjøres automatisk ved endringer.

Syntaxen er `useEffect(setupFunction, dependencyArray)` hvor oppsettsfunksjonen gjerne deklareres in-place som en pilfunksjon og overvåkingslisten ***må*** defineres i form av en... eh... ~~"matriseliteral" (er det mulig å skrive programmeringsnotater på norsk uten å virke pretensiøs?)~~ ved bruk av klammetegn-notasjon. Vi skal ikke kunne endre denne listen senere ved å legge til eller ta bort noe, så vi får ikke bruke en listevariabel.

`useEffect` importeres ***utenfor*** komponentfunksjonen, og brukes ***inne i*** komponentfunksjonen, ***men etter `useState`*** slik at tilstandsvariabler kan legges til i effektens overvåkingsliste:

```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
    const [state, setState] = useState("dispair");

    useEffect(() => {
        // ...
    }, [state]);

    // ...
}
```

### Effekter

I funksjonen du sender som det første argumentet til `useEffect`, kan du ***returnere en oppryddingsfunksjon***. Denne kjøres ~~etter funksjonen din har returnert~~ når komponentet destrueres, eller før en re-rendrering som forårsakes av de overvåkede tilstandsvariablene.

Lignende som ved bruk av `useState`, kjøres `useEffect` (og oppryddingsfunksjonen som returneres) *to ganger* når React lager komponentet i strict-mode/dev-mode. Dette sørger for at dersom vi ikke rydder opp etter oss ordentlig blir det problemer andre gangen komponentet lages, og vi ser at vi har gjort noe feil.

### Andre regler / gotchas

* useEffect må kalles "øverst" i komponentet (altså før return sikkert?)
* useEffect kan ikke kalles inne i en løkke, og kan ikke kalles avhengig av ditt eller datt (if/else)
* React prioriterer rendrering av nettsiden og effekter kjøres gjerne etter rendrering, noe som kan overraske dersom vi forventer at effekten skal påvirke rendrering. Det finnes da en annen løsning å bruke kallt `useLayoutEffect`
* Dersom effekten kjøres som resultat av en brukerhandling (f.ex museklikk) kan det være den kjøres *før* rendrering, og om det ikke ønskes kan det utsettes via en setTimeout uten noen tidsverdi.
* Effekter kjører kun på klienten, ikke på server selv ved server-side rendrering.