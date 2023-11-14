import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [theme, setTheme] = useState("saude");

    const [year, setYear] = useState(2023);

    const [data, setData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const signal = controller.signal;

        const request = axios.get(`https://mba-api.vercel.app/city/${theme}/${year}`, {
            signal,
        });

        request
            .then((response) => {
                console.log("response", response);
                setData(response.data);
            })
            .catch((err) => {
                console.error(`Erro: ${err.mensage}`);
            });

        return () => controller.abort();
    }, [theme, year]);

    return (
        <div className="App">
            <h1>Praia Grande</h1>
            <div>
                {data.map((item) => (
                    <div key={item.city_id}>
                        <p>{item.theme}</p>
                        <p>{item.year}</p>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
