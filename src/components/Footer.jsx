import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";
import { getActivities } from "../data/activities";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("global");
    const activities = getActivities(t);

    const footerLinks = [
        { name: t("footer.about-us"), path: "/about-us" },
        { name: t("footer.services"), path: "/activities" },
        { name: t("footer.machinery"), path: "/machines" },
        { name: t("footer.contact-us"), path: "/contact-us" },
    ];
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
                    </div>
                    <div className="footer__block">
                        <h2 className="footer__block-title">
                            {t("footer.pages")}
                        </h2>
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
                        <h2 className="footer__block-title">
                            {t("footer.services")}
                        </h2>
                        <ul className="footer__list">
                            {activities.map((activity, index) => {
                                return (
                                    <li key={index} className="footer__item">
                                        <Link to={activity.path}>
                                            {activity.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="footer__block">
                        <h2 className="footer__block-title">
                            {t("footer.contact-us")}
                        </h2>
                        <ul className="footer__list">
                            <li className="footer__item footer__item--contact-us">
                                <FaPhoneAlt size={24} />
                                <div>
                                    <p>+994 (50) 230 03 15</p>
                                    <p>+994 (50) 250 44 91</p>
                                    <p>+994 (12) 409 85 99</p>
                                </div>
                            </li>
                            <li className="footer__item  footer__item--contact-us">
                                <FaEnvelope size={24} />
                                <p>info@technomak.az</p>
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
