import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import burgerSvg from "../assets/icons/burger.svg";
import LanguageSelector from "./LanguageSelector";

const headerLinks = [
    { name: "Haqqımızda", path: "/about-us" },
    { name: "Fəaliyyətlərimiz", path: "/activities" },
    { name: "Makinaparkı", path: "/machines" },
    // { name: "Projects", path: "/projects" },
    { name: "Əlaqə", path: "/contact-us" },
];

const Header = () => {
    return (
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
                    <LanguageSelector/>
                    <button className="header__btn">
                        <img src={burgerSvg} alt="" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
