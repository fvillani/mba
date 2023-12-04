import Table from "../../../components/table/Table";
import "./IndexTable.css";
import IndexDialog from "./IndexDialog";

const IndexTable = ({ data = [] }) => {
    const headersTable = ["Tema", "Ano", "Tipo da Ocorrência", "Quantidade", "Histórico"];

    const handleDialog = () => {
        const dialog = document.querySelector("#index");

        dialog.showModal();
    };

    const handleCloseDialog = () => {
        const dialog = document.querySelector("#index");

        dialog.close();
    };

    return (
        <div className="index-table">
            <div className="content">
                {data.length > 0 ? (
                    <>
                        <IndexDialog close={handleCloseDialog} />

                        <Table header={headersTable} body={data} controls={handleDialog} />
                    </>
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
