import { useEffect, useState } from "react";
import { PropsMitarbeiter } from "../properties/PropsMitarbeiter";

function CallApi(url: string) {
    const [data, setData] = useState<PropsMitarbeiter[]>([]);
    const [sortedData, setSortedData] = useState<PropsMitarbeiter[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const Response = await fetch(url);
                const data = await Response.json();
                sortedData.sort((a, b) => a.id - b.id);
                setData(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return { data, setSortedData, sortedData, isLoading }
}

export default CallApi;