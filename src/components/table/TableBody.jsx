const TableBody = ({ data = [], controls = () => {} }) => {
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item.city_id}>
                    <td>{item.theme}</td>
                    <td>{item.year}</td>
                    <td>{item.type}</td>
                    <td>{item.value}</td>
                    <td
                        className="control"
                        onClick={() => {
                            controls(item.theme, item.type);
                        }}
                    >
                        ...
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
