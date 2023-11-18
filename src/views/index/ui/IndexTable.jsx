import Table from "../../../components/table/Table";
import "./IndexTable.css";

const IndexTable = ({ data = [] }) => {
    const headersTable = ["Tema", "Ano", "Valor"];

    return (
        <div className="index-table">
            <div className="content">
                {data.length > 0 ? (
                    <Table header={headersTable} body={data} />
                ) : (
                    <div className="no-data">
                        Selecione os filtros <span>acima</span> para obter informações
                    </div>
                )}
            </div>
        </div>
    );
};

export default IndexTable;
