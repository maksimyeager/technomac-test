import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import { getMachines } from "../data/machines";
import { useTranslation } from "react-i18next";

import Banner from "../components/Banner";
import bannerImg from "../assets/banners/machines.jpg";

const Machines = () => {
    const { t } = useTranslation("global");
    const machines = getMachines(t);
    return (
        <>
            <Banner title={t("navbar.machinery")} bgImage={bannerImg} />
            <div className="cards">
                <div className="container">
                    <div className="cards__wrapper">
                        {machines.map((machine, index) => {
                            return (
                                <Link key={index} to={machine.path}>
                                    <div className="card">
                                        <div className="card__ image">
                                            <img
                                                src={machine.imageUrl}
                                                alt={machine.name}
                                            />
                                        </div>
                                        <div className="card__info">
                                            <h2>{machine.name}</h2>

                                            <Link
                                                to={machine.path}
                                                className="card__link"
                                            >
                                                <FaArrowRight
                                                    color="#fff"
                                                    size={20}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>{" "}
        </>
    );
};

export default Machines;
