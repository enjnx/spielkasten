import ListComponent from '../component/layout/ListComponent';
import Tabellenkopf from "../component/layout/Tabellenkopf";

function Foto() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos'

    const headerProperties = ['albumId', "Thumb", "url"];

    return (
        <div className="main">
            <h1>Foto</h1>
            <Tabellenkopf {...headerProperties} />
            <ListComponent apiUrl={apiUrl} blockType="album" />
        </div>
    );
};

export default Foto;