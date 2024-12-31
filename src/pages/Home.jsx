import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import weldingImg from "../assets/welding.png";
import grayEllipses from "../assets/gray-ellipses.png";
import redEllipses from "../assets/red-ellipses.png";

import activity1 from "../assets/projects/project-1.jpg";
import activity2 from "../assets/projects/project-2.jpg";
import activity3 from "../assets/projects/project-3.jpg";
import activity4 from "../assets/projects/project-5.jpg";
import activity5 from "../assets/projects/project-6.jpg";

import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";

const activities = [
    {
        name: "Tikinti sahəsinin hazırlanmas",
        imageUrl: activity1,
    },
    {
        name: "Yol tikintisi",
        imageUrl: activity2,
    },
    {
        name: " Su anbarlarının tikintisi",
        imageUrl: activity1,
    },
    {
        name: " Su kanallarının qazıntısı",
        imageUrl: activity3,
    },
    {
        name: "Su elektrik stansiyalarının tikintisi",
        imageUrl: activity4,
    },
    {
        name: "Beton işlərin görülməsi",
        imageUrl: activity5,
    },
    {
        name: "Metal konstruksiyaların qurulması",
        imageUrl: activity3,
    },
    {
        name: " Boruların sahədə qaynaq işlərinin aparılması",
        imageUrl: activity4,
    },
    {
        name: "Hidro Elektrik Stansia",
        imageUrl: activity4,
    },
    {
        name: "Güneş Elektrik Stansia",
        imageUrl: activity3,
    },
];

const projects = [
    {
        name: "Project 1",
        imageUrl: project1,
        description:
            "Pirallahi Nərə Balıq Zavodu sahənin hazırlanması və beton işlərinin görülməsin",
    },
    {
        name: "Project 2",
        imageUrl: project2,
        description:
            "Bilgəhdə villaların alt yapı kanalizasiya işlərinin hazırlanması",
    },
    {
        name: "Project 3",
        imageUrl: project3,
        description:
            "Karabağda Cəbrayıl və Zəngilan şəhərlərində yolların hazırlanması",
    },
    {
        name: "Project 4",
        imageUrl: project4,
        description:
            "AzərGold Daşkəsəndə yolların və siyanur havuzlarının yapılması",
    },
    {
        name: "Project 5",
        imageUrl: project5,
        description:
            "Kəlbəcər şəhərində AzərEnerjinin Su Elektrik Stansiyalarının su yollarının hazırlanması və borularının qaynaq işlərinin görülməsi",
    },
    {
        name: "Project 6",
        imageUrl: project6,
        description:
            "Milli Gimnastika Arenası metal konstruksiyaların qurulması",
    },
];

const Home = () => {
    return (
        <>
            <div className="home-banner">
                <div className="home-banner__info">
                    <p className="home-subtitle">Technomaka Hoş Geldiniz!</p>
                    <h1 className="home-title">
                        Sektörde En iyi <br />
                        Hizmeti Sunuyoruz
                    </h1>
                    <p className="home-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        <br /> elit, sed do eiusmod tempor incididunt ut labore
                        et <br /> dolore magna aliqua.
                    </p>
                </div>
            </div>
            <section className="section section--about-us">
                <img src={grayEllipses} alt="" className="gray-ellipses" />
                <div className="container">
                    <div className="section--about-us-image">
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
                    <div className="machines">
                        <div className="machines__wrapper">
                            {activities.map((machine, index) => {
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
            <section className="section section--projects">
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
            </section>
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
