import axios from "axios";
import { useEffect, useState } from "react";

import "./IndexView.css";
import IndexSearch from "./ui/IndexSearch";
import IndexTable from "./ui/IndexTable";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

const IndexView = () => {
    const [theme, setTheme] = useState("");

    const [year, setYear] = useState("");

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        const signal = controller.signal;

        if (theme !== "" && year !== "") {
            setLoading(true);

            const request = axios.get(`https://mba-api.vercel.app/city/${theme}/${year}`, {
                signal,
            });

            request
                .then((response) => {
                    setData(response.data);
                    setError("");
                })
                .catch((err) => {
                    setError("Falha na requisição, tente novamente mais tarde");
                    console.error(`Erro: ${err.mensage}`);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setData([]);
        }

        return () => controller.abort();
    }, [theme, year]);

    const handleChangeTheme = (option) => {
        setTheme(option);
    };

    const handleChangeYear = (option) => {
        setYear(option);
    };

    return (
        <div className="index-view">
            <h1>Acontece na Praia Grande</h1>

            <IndexSearch handleChangeTheme={handleChangeTheme} handleChangeYear={handleChangeYear} />

            {loading ? <Loading /> : error !== "" ? <Error msg={error} /> : <IndexTable data={data} />}
        </div>
    );
};

export default IndexView;
