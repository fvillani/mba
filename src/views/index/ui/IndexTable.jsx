import Table from "../../../components/table/Table";
import "./IndexTable.css";

const IndexTable = ({ data = [] }) => {
    const headersTable = ["Tema", "Ano", "Valor"];

    return (
        <div className="index-table">
            <Table header={headersTable} body={data} />
        </div>
    );
};

export default IndexTable;
