import Tabelle from "../component/layout/Tabelle";
import Tabellenkopf from "../component/layout/Tabellenkopf";
import { baseUrl } from "../component/properties/BaseUrl";

function Foto() {
    const headerProperties = [
        "albumId",
        "id",
        "title",
        "Url",
        "thumbnailUrl"
    ]

    const url = baseUrl + 'photos';

    return (
        <div className="main">
            <h1>Foto</h1>
            <Tabellenkopf {...headerProperties} />
            <Tabelle url={url} />  
        </div>
    )
}

export default Foto;