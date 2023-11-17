const TableHeader = ({ data = [] }) => {
    return (
        <thead>
            <tr>
                {data.map((th, index) => (
                    <th key={index}>{th}</th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
