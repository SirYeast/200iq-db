import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const validSortProperties = ["name", "type", "species"];

export default function Catalog() {
    const [sortMethod, setSortMethod] = useState("");
    const [data, setData] = useState(null);

    async function getData() {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character");

            if (!response.ok)
                throw new Error("Response was not based :(");

            setData((await response.json())?.results);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { getData() }, []);

    function handleSort(arr) {
        if (validSortProperties.includes(sortMethod)) {
            arr.sort((a, b) => a[sortMethod] < b[sortMethod] ? -1 : 1);
        }
        return arr;
    }

    return (
        <>
            <Helmet>
                <title>200IQ DB</title>
            </Helmet>
            <div className="heading flex flex-spaced">
                <h2>Characters</h2>
                <div className="btn br-1">
                    <select name="sort" id="character-sort" defaultValue="" onChange={(e) => setSortMethod(e.target.value)}>
                        <option value="" disabled hidden>Sort By</option>
                        {validSortProperties.map(prop => <option key={prop} value={prop}>{prop[0].toUpperCase() + prop.slice(1)}</option>)}
                    </select>
                </div>
            </div>
            {data && <div className="grid gap-1">
                {handleSort(data).map(character => <div key={character.id} className="character br-1">
                    <Link to={`/character/${character.id}`} className="flex flex-center-both flex-column">
                        <img src={character.image} alt={character.name} className="br-1" />
                        <p>{character.name}</p>
                    </Link>
                </div>)}
            </div>}
        </>
    );
}