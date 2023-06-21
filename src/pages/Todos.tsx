import Tabelle from "../component/layout/Tabelle";
import Tabellenkopf from "../component/layout/Tabellenkopf";
import { baseUrl } from "../component/properties/BaseUrl";

function Todos() {
    const headerProperties = [
        "userId",
        "id",
        "title",
        "completed",
        ""
    ]

    const url = baseUrl + 'todos';


    return (
        <div className="main">
            <h1>Todos</h1>
            <Tabellenkopf {...headerProperties} />
            <Tabelle url={url} />            
        </div>
    )
}

export default Todos;