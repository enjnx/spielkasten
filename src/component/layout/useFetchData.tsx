import { useEffect, useState } from 'react';
import { PropsData } from '../properties/PropsData';

export const useFetchData = (url: string) => {
    const [data, setData] = useState<PropsData[]>([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(jsonData => setData(jsonData));
    }, [url]);

    return data;
};