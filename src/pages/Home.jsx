import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import weldingImg from "../assets/home-page/welding.png";
import grayEllipses from "../assets/gray-ellipses.png";
import redEllipses from "../assets/red-ellipses.png";
import black from "../assets/black.png";

import { activities } from "../data/activities";
// import { projects } from "../data/projects";

const Home = () => {
    return (
        <>
            <div className="home-banner">
                <div className="container">
                    <div className="home-banner__info">
                        <p className="home-subtitle">
                            Technomaka Hoş Geldiniz!
                        </p>
                        <h1 className="home-title">
                            Sektörde En iyi <br />
                            Hizmeti Sunuyoruz
                        </h1>
                        <p className="home-info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            <br /> elit, sed do eiusmod tempor incididunt ut
                            labore et <br /> dolore magna aliqua.
                        </p>
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
                        <p className="section__subtitle">Quis autem vel eum</p>
                        <h2 className="section__title">Hakkımızda</h2>
                        <p>
                            Bizler yılların birikimini ülkemize kazandırmak ve
                            ülkemize bir fayda sağlamak maksadı is makinalari
                            kiralama ve inşaat isleri ile ilgili olarakTechnomak
                            mmc olarak Azerbaycanda kurulmustur.
                        </p>
                        <p>
                            Technomak mmc olarak yıllardır sürekliliğini en iyi
                            şekilde devam ettiren, vizyon ve misyonlarından ödün
                            vermeden büyük bir özveriyle başarılarını günümüze
                            kadar getirmiştir.
                        </p>
                        <Link to={"/about-us"} className="link link-1">
                            <span>Ətrəflı</span>
                            <FaArrowRight color="#fff" size={20} />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="section section--activities">
                <div className="container">
                    <h2 className="section__title">Fəaliyyətlərimiz</h2>
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

                                            <Link to={activity.path}>
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
            {/* <section className="section section--projects">
                <div className="container">
                    <p className="section__subtitle">Quis autem vel eum</p>
                    <h2 className="section__title">Our Projects</h2>
                    <div className="projects">
                        <div className="projects__wrapper">
                            {projects.map((project, index) => {
                                return (
                                    <div key={index} className="project">
                                        <div className="project__image">
                                            <img
                                                src={project.imageUrl}
                                                alt={project.name}
                                            />
                                        </div>
                                        <div className="project__description">
                                            {project.description}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="section section--info">
                <div className="section__block-wrapper section__block-wrapper-1">
                    <div className="section__block section__block-1">
                        <h2 className="section__block-title">Missiyamız</h2>
                        <div className="section__block-description">
                            Technomak mmc olarak kaliteli tasarımları
                            ulaşılabilir fiyatlarla sunmak, müşterilerimizin ...
                        </div>
                        <Link to={"/about-us"} className="link link-2">
                            <span>Ətrəflı</span>
                            <FaArrowRight size={20} />
                        </Link>
                    </div>
                </div>
                <div className="section__block-wrapper section__block-wrapper-2">
                    <div className="section__block section__block-2">
                        <h2 className="section__block-title">Vizyonumuz</h2>
                        <div className="section__block-description">
                            Müşteri ve çalışanlarına artı değer sağlayan,
                            kaliteli ürün ve hizmetleri ile geniş kitlelere
                            erişen, toplumsal sorumluluğunun bilincinde,
                            değerlerine sadık, güvenilirliği, kalite yönetimi,
                            ürün ve hizmet çeşitliliğinde öncülüğü...
                        </div>
                        <Link to={"/about-us"} className="link link-3">
                            <span>Ətrəflı</span>
                            <FaArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
