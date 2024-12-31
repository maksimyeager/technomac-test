import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import { machines } from "../data/machines";

const Machines = () => {
    return (
        <div className="cards">
            <div className="container">
                <div className="cards__wrapper">
                    {machines.map((machine, index) => {
                        return (
                            <div key={index} className="card">
                                <div className="card__ image">
                                    <img
                                        src={machine.imageUrl}
                                        alt={machine.name}
                                    />
                                </div>
                                <div className="card__info">
                                    <h2>{machine.name}</h2>

                                    <Link to={machine.path}>
                                        <FaArrowRight color="#fff" size={20} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Machines;
