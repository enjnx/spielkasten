function Tabellenkopf(props: string[]) {
    const header = Object.values(props);

    return (
        <div className="grid-container">
            {header.map((header, index) => (
                <div key={index}>
                    <div>{header}</div>
                </div>
            ))}
        </div>
    )
}

export default Tabellenkopf;