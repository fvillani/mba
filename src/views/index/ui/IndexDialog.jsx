import Dialog from "../../../components/dialog/Dialog";
import { ResponsiveBar } from "@nivo/bar";
import "./IndexDialog.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";

const IndexDialog = ({ theme = "", type = "", close = () => {} }) => {
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        const signal = controller.signal;

        setLoading(true);

        if (theme !== "" && type !== "") {
            const request = axios.post(`https://mba-api.vercel.app/type/`, {
                signal,
                paramTheme: theme,
                paramType: type,
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
    }, [theme, type]);

    return (
        <Dialog idDialog={"index"}>
            <div className="index-dialog">
                <div className="header">
                    {type && <h2>Histórico - {type}</h2>}

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
                            indexBy="year"
                            margin={{ top: 30, right: 50, bottom: 30, left: 50 }}
                            padding={0.5}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: "Quantidade",
                                legendPosition: "middle",
                                legendOffset: -40,
                                truncateTickAt: 0,
                            }}
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
