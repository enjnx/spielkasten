import { PropsMitarbeiter } from "../properties/PropsMitarbeiter";

export const filterDataByUsername = (
    data: PropsMitarbeiter[],
    setSortedData: React.Dispatch<React.SetStateAction<PropsMitarbeiter[]>>,
    selectedValue: string
) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => a.username.localeCompare(b.username));
    const filteredData = sortedData.filter((item) =>
        item.username.includes(selectedValue)
    );
    setSortedData(filteredData);
};
