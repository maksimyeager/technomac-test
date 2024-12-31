import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";

const footerLinks = [
    { name: "Haqqımızda", path: "/about-us" },
    { name: "Fəaliyyətlərimiz", path: "/activities" },
    { name: "Machinalar", path: "/machines" },
    { name: "Projects", path: "/projects" },
    { name: "Əlaqə", path: "/contact-us" },
];

const servicesLink = [
    {
        name: "Tikinti sahəsinin hazırlanmas",
    },
    {
        name: "Yol inşaatı",
    },
    {
        name: "HES (Hidro Elektrik Stansiya)",
    },
    {
        name: "Güneş Elektrik Stansia",
    },
    {
        name: "Boruların sahədə qaynaq işlərinin aparılması",
    },
    {
        name: "Beton işlərin görülməsi",
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__block">
                        <div className="footer__logo">
                            <Link to={"/"}>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="footer__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </div>
                    </div>
                    <div className="footer__block">
                        <h2 className="footer__block-title">Our Links</h2>
                        <ul className="footer__list">
                            {footerLinks.map((link, index) => {
                                return (
                                    <li key={index} className="footer__item">
                                        <Link to={link.path}>{link.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="footer__block">
                        <h2 className="footer__block-title">Our services</h2>
                        <ul className="footer__list">
                            {servicesLink.map((link, index) => {
                                return (
                                    <li key={index} className="footer__item">
                                        <Link to={""}>{link.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="footer__block">
                        <h2 className="footer__block-title">Contact Us</h2>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link to={""} className="footer__link">
                                    <FaPhoneAlt size={24} />
                                    <span>+77 777 77 77</span>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to={""} className="footer__link">
                                    <FaEnvelope size={24} />
                                    <span>technomak@gmail.com</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="copyright">
                        Copyright © 2024 TechnoMac by{" "}
                        <a href="https://moderndigital.az/">Modern Digital</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
