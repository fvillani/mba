import { useEffect, useState } from "react";
import Select from "../../../components/select/Select";
import "./IndexSearch.css";
import axios from "axios";

const IndexSearch = ({ handleChangeTheme = null, handleChangeYear = null }) => {
    const [optionsTheme, setOptionsTheme] = useState([]);

    const [optionsYear, setOptionsYear] = useState([]);

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
                console.log("response", response);
                setOptionsTheme(
                    response[0].data.map((item) => {
                        return { value: item.theme, name: item.theme };
                    })
                );

                setOptionsYear(
                    response[1].data.map((item) => {
                        return { value: item.year, name: item.year };
                    })
                );
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
        <div className="search-index">
            <Select name={"theme"} placeholder={"Escolha o tema"} options={optionsTheme} handleChange={changeTheme} />

            <Select name={"year"} placeholder={"Escolha o ano"} options={optionsYear} handleChange={changeYear} />
        </div>
    );
};

export default IndexSearch;
