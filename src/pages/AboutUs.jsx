import image from "../assets/image.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image5 from "../assets/image-5.png";

import project3 from "../assets/projects/project-3.jpg";
import project5 from "../assets/projects/project-5.jpg";

import redEllipses from "../assets/red-ellipses.png";
import black from "../assets/black.png";

const AboutUs = () => {
    return (
        <>
            <section className="section section--1">
                <div className="container">
                    <div className="section__wrapper">
                        <div className="section__info">
                            <p className="section__subtitle">
                                Technomaka Hoş Geldiniz!
                            </p>
                            <h2 className="section__title">Hakkımızda</h2>
                            <p>
                                Bizler yılların birikimini ülkemize kazandırmak
                                ve ülkemize bir fayda sağlamak maksadı is
                                makinalari kiralama ve inşaat isleri ile ilgili
                                olarak Technomak mmc olarak Azerbaycanda
                                kurulmustur.
                            </p>
                            <p>
                                Technomak mmc olarak yıllardır sürekliliğini en
                                iyi şekilde devam ettiren, vizyon ve
                                misyonlarından ödün vermeden büyük bir özveriyle
                                başarılarını günümüze kadar getirmiştir.
                            </p>
                        </div>
                        <div className="section__image">
                            <div className="section__image-block">
                                <img
                                    src={project3}
                                    alt=""
                                    className="section--img"
                                />
                                <img
                                    src={project5}
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
                                <img src={image} alt="Technomak mmc" />
                            </div>
                            <div className="section__info">
                                <h2 className="section__title">Missiyamız</h2>
                                <p className="section__description">
                                    Technomak mmc olarak kaliteli tasarımları
                                    ulaşılabilir fiyatlarla sunmak,
                                    müşterilerimizin beklentilerine en uygun
                                    çözümleri üreterek memnuniyetlerini en üst
                                    seviyede tutmak, taahhüdümüz altında olan
                                    proje teslimlerini zamanında ve standartlara
                                    uygun tamamlamak, tedarikçileri kalite
                                    sisteminin bütünü içerisinde değerlendirip
                                    hep birlikte sürekli iyileştirmeyi
                                    amaçlamak, teknolojik gelişmeleri takip
                                    etmek ve uygulamak, iş güvenliği konusunu
                                    birinci dereceden önemli kılmak ve
                                    geliştirmek, mümkün olduğu ölçüde çevre
                                    dostu yapı malzemelerini kullanmak,
                                    uygulamak ve çevreye saygılı olmak
                                    misyonumuzdur. Çevreye saygılı, müşterisini
                                    ve çalışanını memnun eden, toplumun
                                    gayrimenkul ihtiyaçlarını.
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
                                Müşteri ve çalışanlarına artı değer sağlayan,
                                kaliteli ürün ve hizmetleri ile geniş kitlelere
                                erişen, toplumsal sorumluluğunun bilincinde,
                                değerlerine sadık, güvenilirliği, kalite
                                yönetimi, ürün ve hizmet çeşitliliğinde
                                öncülüğü, uzman personeli ve müşteri odaklı
                                hizmet anlayışıyla ilk akla gelen ve tercih
                                edilen kurum olmak. Geçmişimizden aldığımız
                                mirasımızı, bilgi ve deneyimimizi, güçlü
                                işbirlikleri, nitelikli insan kaynakları ve
                                yenilikçi yaklaşımlar ile birleştirmek.
                                Azerbaycanda güvenilir yapılar oluşturan ve
                                kaliteli yaşam alanları geliştiren şirketlerden
                                biri olmak. Değişen müşteri beklentilerine hızlı
                                bir şekilde cevap verebilmek için sürekli
                                iyileştirme faaliyetlerini etkin olarak
                                sürdürmek. Kaliteli hizmet sunmak amacıyla her
                                zaman sektörel alandaki teknolojileri yakından
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
                                <img src={image2} alt="Technomak mmc values" />
                            </div>
                            <div className="section__info">
                                <h2 className="section__title">Değerlerimiz</h2>
                                <p className="section__description">
                                    Gerçekleştirdiğimiz her aktivitenin
                                    temelinde, tanımlanmış şirket değerlerimiz
                                    yatar. Üstlendiğimiz projelerde, bu
                                    değerlerin göz ardı edilmemesi gerektiğini
                                    bilir ve buna göre çalışırız. Değerlerimize
                                    bağlı çalıştığımızda, hizmet sağladığımız
                                    sektörde, daha fazla başarıya ulaşacağımızı
                                    biliriz.
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
                                Müşteri ihtiyaçlarını esas alarak taleplere en
                                hızlı ve verimli şekilde disiplinli ve ilgili
                                yaklaşmak, Planlı ve standartları en üst
                                seviyede olan kaliteli hizmeti vermeyi ilke
                                edinmek, Projeleri iş programına ve teknik
                                şartnamelere uygun olarak zamanında bitirmek ve
                                teslim etmek, Çağın gerektirdiği modern ve
                                geçerli yöntem, teknoloji, bilgi ve yönetim
                                sistemlerini kullanmak, Çalışanlar arasında
                                karşılıklı güven, saygı, sevgi anlayışı ve
                                iletişimi geliştirerek huzurlu bir iş ortamı
                                oluşturmak, Kalite güvence sisteminin
                                devamlılığını sağlayarak sürekli iyileşmeyi
                                gerçekleştirmek, Tüm faaliyetlerimiz kapsamında
                                olası tehlikeli durum ve davranışlar ile ilgili
                                risk değerlendirmelerini sistematik bir şekilde
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
        </>
    );
};

export default AboutUs;
