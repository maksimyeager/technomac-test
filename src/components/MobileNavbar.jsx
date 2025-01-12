import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import MobileLanguageSelctor from "./MobileLanguageSelector";

const mobileNavbarLinks = [
    { name: "Hakkımızda", path: "/about-us" },
    { name: "Faaliyet Alanlarımız", path: "/activities" },
    { name: "Makina Parkı", path: "/machines" },
    { name: "İletişim", path: "/contact-us" },
];

// eslint-disable-next-line react/prop-types
const MobileNavbar = ({ open, onClose }) => {
    useEffect(() => {
        if (open) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [open]);

    return (
        <>
            <div
                className={`mobile-navbar--overlay ${
                    open ? "mobile-navbar--overlay--open" : ""
                }`}
            ></div>
            <div
                className={`mobile-navbar ${open ? "mobile-navbar--open" : ""}`}
            >
                <div className="mobile-navbar__close" onClick={onClose}>
                    <IoMdClose size={40} />
                </div>

                <ul className="mobile-navbar__list">
                    {mobileNavbarLinks.map((link, id) => {
                        return (
                            <li key={id} className="mobile-navbar__item">
                                <Link
                                    to={link.path}
                                    className="mobile-navbar__link"
                                    onClick={() => onClose()}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <MobileLanguageSelctor />
            </div>
        </>
    );
};

export default MobileNavbar;
