import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import MobileLanguageSelctor from "./MobileLanguageSelector";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const MobileNavbar = ({ open, onClose }) => {
    const { t } = useTranslation("global");

    const mobileNavbarLinks = [
        { name: t("navbar.about-us"), path: "/about-us" },
        { name: t("navbar.services"), path: "/activities" },
        { name: t("navbar.machinery"), path: "/machines" },
        { name: t("navbar.contact-us"), path: "/contact-us" },
    ];

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
