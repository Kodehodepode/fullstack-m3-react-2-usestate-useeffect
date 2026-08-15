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

## Deployment / konfigurasjon

Prosjektet lastes opp til GitHub-pages etter å bli bygget av Vite via en GitHub Action.

Vite-konfigurasjonen er oppdatert med prosjektnavnet som base url for å få riktig adresse til assets når siden ligger på GitHub.

I tillegg er der en del konfigurasjon lagt til som ikke strengt tatt er nødvendig:
* Det er installert en babel plugin for styled-components.
* Det er konfigurert en "polling" mode som sjekker filsystemet for endringer hvert 100 millisekund.

Disse var et forsøk på å løse et problem hvor nettsiden ikke ble oppdatert selv om filene endres, og sletting av cache eller å åpne siden i privat-modus ikke løste problemet. Noe imellom Vite sin byggeprosess og React sin styled-components plugin kunne føre til et problem hvor Vite ikke merket endringer i følge et google søk, og en kompileringsplugin spesifikt for denne plugin skulle løse det, derav styled-components plugin til babel.

Problemet kunne også være at windows rate-limiter filsystem-hendelser slik at Vite ikke får beskjed om endringer via strategien Vite vanligvis bruker: å melde seg på filsystem-hendelser. Dersom det var problemet, ville det løses av å konfigurere Vite til å bruke en "polling" strategi istedet, hvor det manuelt leses fra filsystemet periodevis uavhengig av om Vite har fått beskjed om endringer.

Til slutt var problemet at filenes innhold ble revertert til en tidligere tilstand selv om jeg endret dem, enten på gurnn av hvordan Windows buffrer og gjenopretter filer, eller på grunn av noe VS Code gjør imellom sine buffer og filsystemet. Jeg merket til slutt at koden jeg skrev i VS Code endret seg tilbake til tidligere filversjoner mens jeg kodet, men fant ikke kilden til problemet før det gikk over.
