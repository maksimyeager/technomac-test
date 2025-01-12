import image1 from "../assets/about-us/about-us-1.png";
import image2 from "../assets/about-us/about-us-2.png";
import image3 from "../assets/about-us/about-us-3.png";
import image4 from "../assets/about-us/about-us-4.png";
import image5 from "../assets/about-us/about-us-5.png";
import image6 from "../assets/about-us/about-us-6.png";

import redEllipses from "../assets/red-ellipses.png";
import black from "../assets/black.png";
import Banner from "../components/Banner";
import bannerImg from "../assets/banners/about-us.jpg";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t } = useTranslation("global");

    return (
        <>
            <Banner title={t("navbar.about-us")} bgImage={bannerImg} />
            <div className="about-us">
                <section className="section section--1">
                    <div className="container">
                        <div className="section__wrapper">
                            <div className="section__info">
                                <p className="section__subtitle">
                                    {t("about-us.subtitle")}
                                </p>
                                <h2 className="section__title">
                                    {t("about-us.title")}
                                </h2>
                                <p>{t("about-us.desc-1")}</p>
                                <p>
                                    <p>{t("about-us.desc-2")}</p>
                                </p>
                            </div>
                            <div className="section__image">
                                <div className="section__image-block">
                                    <img
                                        src={image1}
                                        alt=""
                                        className="section--img"
                                    />
                                    <img
                                        src={image2}
                                        alt=""
                                        className="section--img-absolute"
                                    />
                                    <img
                                        src={redEllipses}
                                        alt=""
                                        className="red-ellipses"
                                    />
                                    <img src={black} alt="" className="black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-about-us__wrapper section-about-us__wrapper-2">
                    <section className="section section--2">
                        <div className="container">
                            <div className="section__wrapper">
                                <div className="section__image">
                                    <img src={image6} alt="Technomak mmc" />
                                </div>
                                <div className="section__info">
                                    <h2 className="section__title">
                                        {t("about-us.mission")}
                                    </h2>
                                    <p className="section__description">
                                        {t("about-us.mission-desc")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="section section--3">
                    <div className="container">
                        <div className="section__wrapper">
                            <div className="section__info">
                                <h2 className="section__title">
                                    {t("about-us.vision")}
                                </h2>
                                <p className="section__description">
                                    {t("about-us.vision-desc")}
                                </p>
                            </div>
                            <div className="section__image">
                                <div className="section__image-block">
                                    <img
                                        className="section--img"
                                        src={image3}
                                        alt=""
                                    />
                                    <img
                                        src={redEllipses}
                                        alt=""
                                        className="red-ellipses"
                                    />
                                    <img src={black} alt="" className="black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-about-us__wrapper section-about-us__wrapper-4">
                    <section className="section section--4">
                        <div className="container">
                            <div className="section__wrapper">
                                <div className="section__image">
                                    <img
                                        src={image4}
                                        alt="Technomak mmc values"
                                    />
                                </div>
                                <div className="section__info">
                                    <h2 className="section__title">
                                        {t("about-us.values")}
                                    </h2>
                                    <p className="section__description">
                                    {t("about-us.values-desc")}
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="section section--5">
                    <div className="container">
                        <div className="section__wrapper">
                            <div className="section__info">
                                <h2 className="section__title">
                                {t("about-us.policy")}

                                </h2>
                                <p className="section__description">
                                    Müşteri ihtiyaçlarını esas alarak taleplere
                                    en hızlı ve verimli şekilde disiplinli ve
                                    ilgili yaklaşmak, Planlı ve standartları en
                                    üst seviyede olan kaliteli hizmeti vermeyi
                                    ilke edinmek, Projeleri iş programına ve
                                    teknik şartnamelere uygun olarak zamanında
                                    bitirmek ve teslim etmek, Çağın gerektirdiği
                                    modern ve geçerli yöntem, teknoloji, bilgi
                                    ve yönetim sistemlerini kullanmak,
                                    Çalışanlar arasında karşılıklı güven, saygı,
                                    sevgi anlayışı ve iletişimi geliştirerek
                                    huzurlu bir iş ortamı oluşturmak, Kalite
                                    güvence sisteminin devamlılığını sağlayarak
                                    sürekli iyileşmeyi gerçekleştirmek, Tüm
                                    faaliyetlerimiz kapsamında olası tehlikeli
                                    durum ve davranışlar ile ilgili risk
                                    değerlendirmelerini sistematik bir şekilde
                                    yaparak önleme kültürünü yerleştirmek.
                                </p>
                            </div>
                            <div className="section__image">
                                <div className="section__image-block">
                                    <img
                                        className="section--img"
                                        src={image5}
                                        alt=""
                                    />
                                    <img
                                        src={redEllipses}
                                        alt=""
                                        className="red-ellipses"
                                    />
                                    <img src={black} alt="" className="black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUs;
