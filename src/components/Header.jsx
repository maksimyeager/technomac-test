import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo-2.jpg";
import burgerSvg from "../assets/icons/burger.svg";
import LanguageSelector from "./LanguageSelector";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation("global");

    const [open, setOpen] = useState(false);

    const headerLinks = [
        { name: t("navbar.about-us"), path: "/about-us" },
        { name: t("navbar.services"), path: "/activities" },
        { name: t("navbar.machinery"), path: "/machines" },
        { name: t("navbar.contact-us"), path: "/contact-us" },
    ];
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__logo">
                        <Link to={"/"}>
                            <img src={logo} alt="" className="logo" />
                        </Link>
                    </div>
                    <div className="header__menu">
                        <ul className="header__list">
                            {headerLinks.map((link, index) => {
                                return (
                                    <li key={index} className="header__item">
                                        <Link to={link.path}>{link.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="header__actions">
                        <LanguageSelector />
                        <button
                            className="header__btn"
                            onClick={() => setOpen(true)}
                        >
                            <img src={burgerSvg} alt="" />
                        </button>
                    </div>
                </div>
            </header>
            <MobileNavbar open={open} onClose={handleClose} />
        </>
    );
};

export default Header;
