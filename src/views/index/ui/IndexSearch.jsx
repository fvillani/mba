import { useEffect, useState } from "react";
import Select from "../../../components/select/Select";
import "./IndexSearch.css";
import axios from "axios";

const IndexSearch = ({ handleChangeTheme = null, handleChangeYear = null }) => {
    const [optionsTheme, setOptionsTheme] = useState([
        { value: "saude", name: "Saúde" },
        { value: "seguranca", name: "Segurança" },
        { value: "transporte", name: "Transporte" },
    ]);

    const [optionsYear, setOptionsYear] = useState([
        { value: 2022, name: "2022" },
        { value: 2021, name: "2021" },
        { value: 2023, name: "2023" },
    ]);

    useEffect(() => {
        const controller = new AbortController();

        const signal = controller.signal;

        const requestThemes = axios.get(`https://mba-api.vercel.app/themes`, {
            signal,
        });

        const requestYears = axios.get(`https://mba-api.vercel.app/years`, {
            signal,
        });

        Promise.all([requestThemes, requestYears])
            .then((response) => {
                setOptionsTheme(response[0].data);

                setOptionsYear(response[1].data);
            })
            .catch((err) => {
                console.error(`Erro: ${err.mensage}`);
            });

        return () => controller.abort();
    }, []);

    const changeTheme = (theme) => {
        if (handleChangeTheme) {
            handleChangeTheme(theme);
        }
    };

    const changeYear = (year) => {
        if (handleChangeYear) {
            handleChangeYear(year);
        }
    };

    return (
        <div className="search-idnex">
            <Select name={"theme"} placeholder={"Escolha o tema"} options={optionsTheme} handleChange={changeTheme} />

            <Select name={"year"} placeholder={"Escolha o ano"} options={optionsYear} handleChange={changeYear} />
        </div>
    );
};

export default IndexSearch;
