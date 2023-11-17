import axios from "axios";
import { useEffect, useState } from "react";

import "./IndexView.css";
import IndexSearch from "./ui/IndexSearch";
import IndexTable from "./ui/IndexTable";

const IndexView = () => {
    const [theme, setTheme] = useState("saude");

    const [year, setYear] = useState(2023);

    const [data, setData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const signal = controller.signal;

        if (theme !== "" && year !== "") {
            const request = axios.get(`https://mba-api.vercel.app/city/${theme}/${year}`, {
                signal,
            });

            request
                .then((response) => {
                    setData(response.data);
                })
                .catch((err) => {
                    console.error(`Erro: ${err.mensage}`);
                });
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

            <IndexTable data={data} />
        </div>
    );
};

export default IndexView;
