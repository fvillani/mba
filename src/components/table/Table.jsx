import "./Table.css";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ header = [], body = [] }) => {
    return (
        <table className="table">
            <TableHeader data={header} />

            <TableBody data={body} />
        </table>
    );
};

export default Table;
