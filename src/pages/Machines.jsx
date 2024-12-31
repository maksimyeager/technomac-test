import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import Greyder from "../assets/machines/greyder.jpg";
import Katok from "../assets/machines/katok.jpg";
import Manipulator from "../assets/machines/manipulator.jpg";
import Eskavator from "../assets/machines/eskavator.jpg";
import Buldozer from "../assets/machines/buldozer.jpg";
import TeleskopikForklift from "../assets/machines/teleskopik-forklift.jpg";
import YanaqmaqMasini from "../assets/machines/yanacaq-masini.jpg";
import Kran from "../assets/machines/kran.jpg";
import Generator from "../assets/machines/generator.jpg";
import Konteyner from "../assets/machines/konteyner.jpg";
import Manlift from "../assets/machines/manlift.jpg";
import Sebet from "../assets/machines/sebet.jpg";
import Avtokar from "../assets/machines/avtokar.jpg";

const machines = [
    { name: "Greyder", imageUrl: Greyder },
    { name: "Katok", imageUrl: Katok },
    { name: "Manipulator", imageUrl: Manipulator },
    { name: "Eskavator", imageUrl: Eskavator },
    { name: "Buldozer", imageUrl: Buldozer },
    { name: "Teleskopik forklift", imageUrl: TeleskopikForklift },
    { name: "Yanacaq maşını", imageUrl: YanaqmaqMasini },
    { name: "Kran", imageUrl: Kran },
    { name: "Generator", imageUrl: Generator },
    { name: "Konteyner", imageUrl: Konteyner },
    { name: "Manlift", imageUrl: Manlift },
    { name: "Səbət", imageUrl: Sebet },
    { name: "Avtokar", imageUrl: Avtokar },
];

const Machines = () => {
    return (
        <div className="machines">
            <div className="container">
                <div className="machines__wrapper">
                    {machines.map((machine, index) => {
                        return (
                            <div key={index} className="machine">
                                <div className="machine__image">
                                    <img
                                        src={machine.imageUrl}
                                        alt={machine.name}
                                    />
                                </div>
                                <div className="machine__info">
                                    <h2>{machine.name}</h2>

                                    <Link to={"#"}>
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
