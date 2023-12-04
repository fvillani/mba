import Dialog from "../../../components/dialog/Dialog";
import { ResponsiveBar } from "@nivo/bar";
import "./IndexDialog.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";

const IndexDialog = ({ theme = "", type = "", close = () => {} }) => {
    const [data, setData] = useState([
        {
            key: "2020",
            value: 50,
        },
        {
            key: "2021",
            value: 60,
        },
        {
            key: "2022",
            value: 70,
        },
    ]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    /*useEffect(() => {
        const controller = new AbortController();

        const signal = controller.signal;

        setLoading(true);

        if (theme !== "" && type !== "") {
            const request = axios.get(`https://mba-api.vercel.app/type/${theme}/${type}`, {
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
    }, [theme, type]);*/

    return (
        <Dialog idDialog={"index"}>
            <div className="index-dialog">
                <div className="header">
                    <h2>Tema</h2>

                    <span className="close" onClick={() => close()}>
                        Fechar
                    </span>
                </div>

                {loading ? (
                    <Loading />
                ) : error !== "" ? (
                    <Error msg={error} />
                ) : (
                    <div className="chart">
                        <ResponsiveBar
                            data={data}
                            indexBy="key"
                            margin={{ top: 30, right: 50, bottom: 30, left: 50 }}
                            padding={0.5}
                            valueScale={{ type: "linear" }}
                            indexScale={{ type: "band", round: true }}
                            colors={{ scheme: "nivo" }}
                            role="application"
                            ariaLabel="Nivo bar chart demo"
                        />
                    </div>
                )}
            </div>
        </Dialog>
    );
};

export default IndexDialog;
