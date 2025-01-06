import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";
import {activities} from "../data/activities"

const footerLinks = [
    { name: "Haqqımızda", path: "/about-us" },
    { name: "Fəaliyyətlərimiz", path: "/activities" },
    { name: "Makinaparkı", path: "/machines" },
    // { name: "Projects", path: "/projects" },
    { name: "Əlaqə", path: "/contact-us" },
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
                            
                            {activities.map((activity, index) => {
                                return (
                                    <li key={index} className="footer__item">
                                        <Link to={activity.path}>{activity.name}</Link>
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
                                    <span>+994 50 250 44 91</span>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to={""} className="footer__link">
                                    <FaEnvelope size={24} />
                                    <span>info@technomak.az</span>
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
