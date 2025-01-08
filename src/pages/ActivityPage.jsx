import { useParams } from "react-router-dom";
import { activities } from "../data/activities";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import activity1 from "../assets/activities/activity-1.jpg";
import activity2 from "../assets/activities/activity-2.jpg";
import activity3 from "../assets/activities/activity-3.jpg";
import activity4 from "../assets/activities/activity-4.jpg";

const ActivityPage = () => {
    const { activityName } = useParams();
    const activity = activities.find((activity) =>
        activity.path.includes(activityName)
    );
    console.log(activity);
    return (
        <div className="page">
            <div className="container">
                <div className="page__info">
                    <h2>{activity.name}</h2>
                    {/* <p>{activity.description}</p> */}
                </div>
                {/* <div className="page__img">
                    <img src={activity.imageUrl} alt="" />
                </div> */}
                <div className="page__title">
                    <h2>{activity.name}</h2>
                </div>
            </div>
            <div className="page__activities">
                {activity.list.map((item, index) => {
                    return (
                        <div
                            className={`section--activity__wrapper section--activity__wrapper-${
                                index % 2 ? 2 : 1
                            }`}
                            key={index}
                        >
                            <div
                                className={`section-activity section-activity-${
                                    index % 2 ? 2 : 1
                                }`}
                            >
                                <div className="container">
                                    <div className="section__wrapper">
                                        <div className="section__image">
                                            <img
                                                src={activity.imageUrl}
                                                alt=""
                                            />
                                        </div>
                                        <h2 className="section__title">
                                            {item}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="banner">
                <Swiper
                    className="banner-swiper"
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                    }}
                >
                    <SwiperSlide>
                        <Link to="/products/thermona">
                            <img src={activity1} alt="Banner 1" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/products/kas-mehsullari">
                            <img src={activity2} alt="Banner 2" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/products/warmhaus">
                            <img src={activity3} alt="Banner 3" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/products/warmhaus">
                            <img src={activity4} alt="Banner 4" />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ActivityPage;
