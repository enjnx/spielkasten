function Tabellenkopf(props: string[]) {
    const header = Object.values(props);

    return (
        <div className="grid-container">
            {header.map((header, index) => (
                <div key={index}>
                    <ul>
                        <li>{header}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Tabellenkopf;