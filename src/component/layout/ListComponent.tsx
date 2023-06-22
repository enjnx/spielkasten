import React, { useEffect, useState } from 'react';
import { PropsData } from '../properties/PropsData';
import Component from './Component';

interface ListComponentProps {
  apiUrl: string;
  blockType?: 'album' | 'todos'; // Hinzufügen einer optionalen Prop, um den gewünschten Blocktyp anzugeben
}

function ListComponent({ apiUrl, blockType }: ListComponentProps) {
  const [dataList, setDataList] = useState<PropsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setDataList(jsonData);
        setLoading(false);
      } catch (error) {
        setError('Datei konnte nicht geladen werden');
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) {
    return <div>Liste wird geladen.</div>;
  }

  if (error) {
    return <div>Die URL-Adresse konnte nicht geladen werden.</div>;
  }

  return (
    <div>
      <Component data={dataList} blockType={blockType} /> {/* blockType an Component übergeben */}
    </div>
  );
}

export default ListComponent;