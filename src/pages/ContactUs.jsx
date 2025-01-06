import markSvg from "../assets/icons/mark.svg";
import phoneSvg from "../assets/icons/phone.svg";
import mailSvg from "../assets/icons/mail.svg";
import instagramSvg from "../assets/icons/instagram.svg";
import facebookSvg from "../assets/icons/facebook.svg";
import linkedinSvg from "../assets/icons/linkedin.svg";
import Form from "../components/Form";
import Banner from "../components/Banner";
import bannerImg from "../assets/banners/contact-us.jpg";

const ContactUs = () => {
    return (
        <>
            <Banner title={"Əlaqə"} bgImage={bannerImg} />

            <div className="contact-us">
                <div className="container">
                    <div className="contact-us__form">
                        <h2 className="contact-us__form-title">
                            Bizimle İletişime Geçebilirsiniz
                        </h2>
                        <Form />
                    </div>
                    <div className="contact-us__info">
                        <div className="contact-us__info-title">
                            Get In Touch
                        </div>
                        <div className="contact-us__info-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud.
                        </div>
                        <div className="contact-us__data">
                            <div className="contact-us__block">
                                <div className="contact-us__block-image">
                                    <img src={markSvg} alt="" />
                                </div>
                                <div className="contact-us__block-info">
                                    <h2>Address</h2>
                                    <p>Baku, example</p>
                                </div>
                            </div>
                            <div className="contact-us__block">
                                <div className="contact-us__block-image">
                                    <img src={phoneSvg} alt="" />
                                </div>
                                <div className="contact-us__block-info">
                                    <h2>Phone Number</h2>
                                    <p>+994 50 250 44 91</p>
                                </div>
                            </div>
                            <div className="contact-us__block">
                                <div className="contact-us__block-image">
                                    <img src={mailSvg} alt="" />
                                </div>
                                <div className="contact-us__block-info">
                                    <h2>E-mail</h2>
                                    <p>info@technomak.az</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-us__socials">
                            <div className="contact-us__socials-title">
                                Follow us:
                            </div>
                            <div className="contact-us__socials-wrap">
                                <div className="contact-us__socials-block">
                                    <a href="https://www.instagram.com/" target="_blank"></a>
                                    <img src={instagramSvg} alt="" />
                                </div>
                                <div className="contact-us__socials-block">
                                    <a href="https://www.facebook.com/" target="_blank"></a>

                                    <img src={facebookSvg} alt="" />
                                </div>
                                <div className="contact-us__socials-block">
                                    <a href="https://www.linkedin.com/" target="_blank"></a>
                                    <img src={linkedinSvg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
