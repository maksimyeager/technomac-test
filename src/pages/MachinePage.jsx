import { useParams } from "react-router-dom";
import { machines } from "../data/machines";

const MachinePage = () => {
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
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum{" "}
                    </p>
                    <button className="link link-1">Rent</button>
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
