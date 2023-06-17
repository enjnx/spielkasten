import { useState } from 'react';
import '../css/grid.css';
import { baseUrl } from '../properties/BaseUrl';
import CallApi from './CallApi';
import { filterDataByUsername } from './FilterByUsername';



function Mitarbeiterliste() {
    const { data, sortedData, setSortedData, isLoading } = CallApi(baseUrl + 'users');
    const [selectedValue, setSelectedValue] = useState("");

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedValue(value);
        filterDataByUsername(data, setSortedData, value);
    }

    return (
        <>
            <h2>Liste</h2>

            <div>
                <select value={selectedValue} onChange={handleFilterChange}>
                    <option value="">Filtern nach Benutzer</option>
                    <option value="Bret">Bret</option>
                    <option value="Antonette">Antonette</option>
                </select>
            </div>

            <div className="grid-container">
                <div>ID</div>
                <div>Name</div>
                <div>Benutzername</div>
            </div>

            {isLoading ? (
                <div>Lädt...</div>
            ) : sortedData.length > 0 ? (
                sortedData.map((item) => (
                    <div className='grid-container' key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.username}</div>
                    </div>
                ))
            ) : (
                data.map((item) => (
                    <div className='grid-container' key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.username}</div>
                    </div>
                ))
            )}
        </>
    )
}

export default Mitarbeiterliste;