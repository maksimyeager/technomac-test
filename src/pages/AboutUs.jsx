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

const AboutUs = () => {
    return (
        <>
            <Banner title={"Hakkımızda"} bgImage={bannerImg} />
            <div className="about-us">
                <section className="section section--1">
                    <div className="container">
                        <div className="section__wrapper">
                            <div className="section__info">
                                <p className="section__subtitle">
                                    Technomak’a Hoş Geldiniz!
                                </p>
                                <h2 className="section__title">Hakkımızda</h2>
                                <p>
                                    Bizler yılların birikimini ülkemize
                                    kazandırmak ve ülkemize bir fayda sağlamak
                                    maksadı iş makinaları kiralama ve inşaat 
                                    işleri  ile ilgili Technomak MMC olarak
                                    Azerbaycanda kurulmuştur.
                                </p>
                                <p>
                                    Technomak MMC olarak yıllardır sürekliliğini
                                    en iyi şekilde devam ettiren, vizyon ve
                                    misyonlarından ödün vermeden büyük bir
                                    özveriyle başarılarını günümüze kadar
                                    getirmiştir.
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
                                        Misyonumuz
                                    </h2>
                                    <p className="section__description">
                                        Technomak MMC olarak kaliteli
                                        tasarımları ulaşılabilir fiyatlarla
                                        sunmak, müşterilerimizin beklentilerine
                                        en uygun çözümleri üreterek
                                        memnuniyetlerini en üst seviyede tutmak,
                                        taahhüdümüz altında olan proje
                                        teslimlerini zamanında ve standartlara
                                        uygun tamamlamak, tedarikçileri kalite
                                        sisteminin bütünü içerisinde
                                        değerlendirip hep birlikte sürekli
                                        iyileştirmeyi amaçlamak, teknolojik
                                        gelişmeleri takip etmek ve uygulamak, iş
                                        güvenliği konusunu birinci dereceden
                                        önemli kılmak ve geliştirmek, mümkün
                                        olduğu ölçüde çevre dostu yapı
                                        malzemelerini kullanmak, uygulamak ve
                                        çevreye saygılı olmak misyonumuzdur.
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
                                <h2 className="section__title">Vizyonumuz</h2>
                                <p className="section__description">
                                    Müşteri ve çalışanlarına artı değer
                                    sağlayan, kaliteli ürün ve hizmetleri ile
                                    geniş kitlelere erişen, toplumsal
                                    sorumluluğunun bilincinde, değerlerine
                                    sadık, güvenilirliği, kalite yönetimi, ürün
                                    ve hizmet çeşitliliğinde öncülüğü, uzman
                                    personeli ve müşteri odaklı hizmet
                                    anlayışıyla ilk akla gelen ve tercih edilen
                                    kurum olmak. Geçmişimizden aldığımız
                                    mirasımızı, bilgi ve deneyimimizi, güçlü
                                    işbirlikleri, nitelikli insan kaynakları ve
                                    yenilikçi yaklaşımlar ile birleştirmek.
                                    Azerbaycanda güvenilir yapılar oluşturan ve
                                    kaliteli yaşam alanları geliştiren
                                    şirketlerden biri olmak. Değişen müşteri
                                    beklentilerine hızlı bir şekilde cevap
                                    verebilmek için sürekli iyileştirme
                                    faaliyetlerini etkin olarak sürdürmek.
                                    Kaliteli hizmet sunmak amacıyla her zaman
                                    sektörel alandaki teknolojileri yakından
                                    takip etmek.
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
                                        Değerlerimiz
                                    </h2>
                                    <p className="section__description">
                                        Gerçekleştirdiğimiz her aktivitenin
                                        temelinde, tanımlanmış şirket
                                        değerlerimiz yatar. Üstlendiğimiz
                                        projelerde, bu değerlerin göz ardı
                                        edilmemesi gerektiğini bilir ve buna
                                        göre çalışırız. Değerlerimize bağlı
                                        çalıştığımızda, hizmet sağladığımız
                                        sektörde, daha fazla başarıya
                                        ulaşacağımızı biliriz.
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
                                    Şirket Politikamız
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
