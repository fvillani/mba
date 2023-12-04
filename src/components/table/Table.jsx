import "./Table.css";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ header = [], body = [], controls = () => {} }) => {
    return (
        <table className="table">
            <TableHeader data={header} />

            <TableBody data={body} controls={controls} />
        </table>
    );
};

export default Table;
