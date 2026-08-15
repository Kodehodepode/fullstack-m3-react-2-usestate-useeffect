# React oppgave 2: useState() og useEffect()

Prosjektet bruker Vite + React

[Oppgavetekst](./OPPGAVE.md)

## CookieClicker

Komponentet importerer styled-components og det lages et element for å wrappe innholdet i komponenten, et for å vise poengene, og et for å klikkes på for å øke poengsummen.

Komponentet inneholder en knapp med en onClick attributt som håndterer oppdatering av poengsummen gjennom å sende en funksjon som argument til oppdateringsfunksjonen returnert fra `useState`, for å kunne endre tilstandsvariabelen med utgangspunkt i nåværende tilstand.

## CatFacts

Komponentet bruker `useEffect` for først å vise "Loading..." i komponentet, for så å oppdatere en liste med resultatet fra en kattefakta-API.

APIen er kallet fra en egen funksjon internt i useEffect-funksjonen for å kunne bruke `async` og `await`.

En `try-catch` blokk oppdaterer meldingen i komponenten til å inneholde en feilmelding om noe går galt.

Om ikke noe går galt, pakkes svaret fra APIen opp og omdannes til et array med kun kattefakta, og en oppdateringsfunksjon brukes får å endre en tilstandsvariabel og dermed trigge en ny rendrering.

## Users

Komponentet importerer `styled-components` og det lages elementer som `UserList`, `UserCard` og `UserForm` for å organisere og style innholdet.

Input feltene i skjemaet gis tilstandsvariabler som verdier, disse oppdateres ved endring av innhold i skjemaet, og leses av når brukeren trykker på knappen.

Listen med brukere vokser ved at den settes til seg selv + det nye elementet når en ny bruker legges til, og endringen av listen fører til re-rendrering av komponentet.
