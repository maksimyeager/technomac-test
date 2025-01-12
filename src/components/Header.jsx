import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import burgerSvg from "../assets/icons/burger.svg";
import LanguageSelector from "./LanguageSelector";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

const headerLinks = [
    { name: "Hakkımızda", path: "/about-us" },
    { name: "Faaliyet Alanlarımız", path: "/activities" },
    { name: "Makina Parkı", path: "/machines" },
    { name: "İletişim", path: "/contact-us" },
];

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__logo">
                        <Link to={"/"}>
                            <img src={logo} alt="" />
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
                        <button className="header__btn" onClick={() => setOpen(true)}>
                            <img src={burgerSvg} alt="" />
                        </button>
                    </div>
                </div>
            </header>
            <MobileNavbar open={open} onClose={handleClose}/>
        </>
    );
};

export default Header;
