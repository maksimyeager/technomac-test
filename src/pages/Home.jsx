import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";

import weldingImg from "../assets/home-page/welding.png";
import grayEllipses from "../assets/gray-ellipses.png";
import redEllipses from "../assets/red-ellipses.png";
import black from "../assets/black.png";

import { getActivities } from "../data/activities";

const Home = () => {
    const { t } = useTranslation("global");
    const activities = getActivities(t);

    return (
        <>
            <div className="home-banner">
                <div className="container">
                    <div className="home-banner__info">
                        <p className="home-subtitle">
                            {t("home-banner.subtitle")}
                        </p>
                        <h1 className="home-title">{t("home-banner.title")}</h1>
                        <p className="home-info">{/* Deacription */}</p>
                    </div>
                </div>
            </div>
            <section className="section section--about-us">
                <img src={grayEllipses} alt="" className="gray-ellipses" />
                <div className="container">
                    <div className="section--about-us__image">
                        <div className="section__image-block">
                            <img
                                src={weldingImg}
                                alt=""
                                className="section--about-us-image__img"
                            />
                            <img
                                src={redEllipses}
                                alt=""
                                className="red-ellipses"
                            />
                            <img src={black} alt="" className="black" />
                        </div>
                    </div>
                    <div className="section--about-us-info">
                        {/* <p className="section__subtitle">Quis autem vel eum</p> */}
                        <h2 className="section__title">
                            {" "}
                            {t("home.about-us-title")}
                        </h2>
                        <p>{t("home.about-us-desc-1")}</p>
                        <p>{t("home.about-us-desc-2")}</p>
                        <Link to={"/about-us"} className="link link-1">
                            <span>{t("home.button")}</span>
                            <FaArrowRight color="#fff" size={20} />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="section section--activities">
                <div className="container">
                    <h2 className="section__title">
                        <p>{t("home.services")}</p>
                    </h2>
                    <div className="cards">
                        <div className="cards__wrapper">
                            {activities.map((activity, index) => {
                                return (
                                    <div key={index} className="card">
                                        <div className="card__image">
                                            <img
                                                src={activity.imageUrl}
                                                alt={activity.name}
                                            />
                                        </div>
                                        <div className="card__info">
                                            <h2>{activity.name}</h2>

                                            <Link
                                                to={activity.path}
                                                className="card__link"
                                            >
                                                <FaArrowRight
                                                    color="#fff"
                                                    size={20}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--info">
                <div className="section__block-wrapper section__block-wrapper-1">
                    <div className="section__block section__block-1">
                        <div className="container">
                            <h2 className="section__block-title">
                                {t("home.section-info-mission")}
                            </h2>
                            <div className="section__block-description">
                                {t("home.section-info-mission-desc")}
                            </div>
                            <Link to={"/about-us"} className="link link-2">
                                <span>{t("home.button")}</span>
                                <FaArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="section__block-wrapper section__block-wrapper-2">
                    <div className="section__block section__block-2">
                        <div className="container">
                            <h2 className="section__block-title">
                                {t("home.section-info-vision")}
                            </h2>
                            <div className="section__block-description">
                                {t("home.section-info-vision-desc")}
                            </div>
                            <Link to={"/about-us"} className="link link-3">
                                <span>{t("home.button")}</span>
                                <FaArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
