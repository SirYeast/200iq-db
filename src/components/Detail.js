import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function Detail() {
    let { id } = useParams();
    const [data, setData] = useState(null);

    async function getData() {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

            if (!response.ok)
                throw new Error("Response was not based :(");

            setData(await response.json());
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { getData() }, []);

    return (
        <>
            {data && <>
                <Helmet>
                    <title>{data.name}</title>
                </Helmet>
                <h2 className="heading">{data.name}</h2>
                <div className="flex gap-2">
                    <img src={data.image} alt={data.name} className="br-1" />
                    <dl>
                        <dt>Status</dt>
                        <dd>{data.status}</dd>
                        <dt>Species</dt>
                        <dd>{data.species}</dd>
                        {data.type && <>
                            <dt>Type</dt>
                            <dd>{data.type}</dd>
                        </>}
                        <dt>Gender</dt>
                        <dd>{data.gender}</dd>
                        <dt>Origin</dt>
                        <dd>{data.origin.name}</dd>
                    </dl>
                </div>
            </>}
        </>
    );
}