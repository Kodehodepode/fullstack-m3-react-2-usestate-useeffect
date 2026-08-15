import { useState, useEffect } from "react";

const apiUrl = "https://catfact.ninja/facts";
const limit = 5;


export default function CatFacts() {
    const [displayItems, setDisplayItems] = useState([]);

    useEffect(() => {
        // TODO: Forstå signals og abort controller

        // Definer en funksjon inne i useEffect fordi useEffect ikke kan være async.
        const fetchData = async () => {
            // Bruk browser-apier for url og parametere (føles litt overkill her, men grei vane kanskje)
            const url = new URL(apiUrl);
            const params = { limit };
            url.search = new URLSearchParams(params).toString();

            try {
                setDisplayItems(["Loading..."]);

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Fetch og pakk ut data-feltet (et array)
                const {data} = await response.json();

                // Hent ut bare fakta fra objektene i data-arrayet
                const facts = data.map(object => object.fact);

                setDisplayItems(facts);
            } catch (error) {
                setDisplayItems([error.toString()]);
            }  
        }
        fetchData();
    }, []);

    return (
        <ul>
            {displayItems.map((fact, index) => (<li key={index}>{fact}</li>))}
        </ul>
    );
}