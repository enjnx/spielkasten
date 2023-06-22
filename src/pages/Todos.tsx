import ListComponent from "../component/layout/ListComponent";
import Tabellenkopf from "../component/layout/Tabellenkopf";

function Todos() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

    const headerProperties = ['userId', 'id', 'title'];

    return (
        <div className="main">
            <h1>Todos</h1>
            <Tabellenkopf {...headerProperties} />
            <ListComponent apiUrl={apiUrl} blockType="todos" /> {/* blockType direkt als Prop übergeben */}
        </div>
    );
}

export default Todos;