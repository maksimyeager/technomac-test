import { useParams } from "react-router-dom";
import { getMachines } from "../data/machines";
import { useTranslation } from "react-i18next";

const MachinePage = () => {
    const { t } = useTranslation("global");

    const machines = getMachines(t);
    const { machineName } = useParams();
    const machine = machines.find((machine) =>
        machine.path.includes(machineName)
    );
    console.log(machine);
    return (
        <div className="page">
            <div className="container">
                <div className="page__info">
                    <h2>{machine.name}</h2>
                </div>
                <div className="page__img">
                    <img src={machine.imageUrl} alt="" />
                </div>
                <div className="page__title">
                    <h2>{machine.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default MachinePage;
