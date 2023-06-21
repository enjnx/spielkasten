import { useFetchData } from "./useFetchData";

function Tabelle({ url }: { url: string }) {
    const data = useFetchData(url);

    return (
        <>
            {data.map((item, index) => (
                <div className="grid-container" key={index}>
                    {Object.values(item).map((value, innerIndex) => (
                        <div>
                            <ul>
                                <li key={innerIndex}>{value}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

export default Tabelle;