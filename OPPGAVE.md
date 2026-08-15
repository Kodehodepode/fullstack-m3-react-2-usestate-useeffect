# React Oppgave 2: useState() og useEffect()

I denne oppgaven skal du lage tre React-komponenter for å øve på bruk av **React Hooks** som `useState` og `useEffect`. Du vil håndtere state, hente data fra API-er, og bygge interaktive grensesnitt.

Oppgaven består av tre deler:
1. **CookieClicker**: Lag en knapp (kjeks) som gir poeng for hvert klikk.
2. **CatFacts**: Hent og vis kattfakta fra et API.
3. **Users**: Vis en liste med brukere og gi mulighet til å legge til nye brukere.

Løs oppgaven steg for steg og ha det gøy mens du koder! 😊

## CookieClicker Komponent

Mål: Lag en komponent hvor du kan trykke på en Kjeks (knapp) for å oppnå poeng.

Eksempel av en knapp:
```html
<button>
    <img
        src="cookie.png"
        alt="Image of a Cookie"
    />
</button>
```

<img alt="Kjeks" src="./public/cookie.png" width="100">

Tips: cookie.png må ligge i public/.

**Funksjonalitet:**

* Når brukeren klikker på knappen (kjeksen), skal de få ett poeng per klikk.
* Bruk `useState` for å holde styr på poengsummen.

**Poengvisning:**

* Vis poengsummen på skjermen slik at brukeren kan se hvor mange poeng de har samlet.

## CatFacts-komponent

**Mål**: Lag en komponent som henter tilfeldige kattfakta fra et API og viser dem på skjermen.

**API:** Bruk følgende API for å hente data: `https://catfact.ninja/facts?limit=5`.

**Funksjonalitet:**

1. **Hente data:**
    * Bruk `useEffect` for å hente data når komponenten monteres.
2. **Håndtere tilstander:**
    * Bruk `useState` til å håndtere følgende tre tilstander:
        * **loading:** Skal vise "Loading..." mens data hentes.
        * **error**: Skal vise en feilmelding dersom det oppstår en feil under API-spørringen.
        * **facts**: Skal vise fakta om katter etter at data er hentet.
3. **Presentasjon:**
    * Når data er hentet, vis alle kattefaktaene på skjermen.
    * Bruk `.map()` for å iterere igjenom faktaene.

## Users-komponent

**Mål**: Lag en komponent som viser en liste over brukere. Bruk følgende `mockData` som utgangspunkt:

Dette er dataene du skal ha som grunnlag:

```javascript
const mockData = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no'},
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
]
```

***Viktig: Du skal kun håndtere data lagret med og i useState og må derfor ikke endre eller modifisere mockData.***

**Funksjonalitet:**

1. **Visning av brukere:**
    * Start med å vise listen over brukere på skjermen.
2. **Opprette nye brukere:**
    * Lag to input-felt:
        * Ett for brukernavn (**username**).
        * Ett for e-post (**email**).
    * Lag en knapp som legger til en ny bruker i listen når den trykkes.

3. **Bruk av useState:**
    * Bruk `useState` for å håndtere listen over brukere.
    * Når brukeren fyller ut feltene og trykker på knappen, skal den nye brukeren legges til i listen.

**Vurdering:**
* Brukeren skal kunne legge til nye brukere ved å fylle ut input-feltene og trykke på knappen.
* Den nye brukeren skal vises i listen etter at den er lagt til.
