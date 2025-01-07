import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import { activities } from "../data/activities";
import Banner from "../components/Banner";
import bannerImg from "../assets/banners/activities.jpg";

const Activities = () => {
    return (
        <>
            <Banner title={"Fəaliyyətlərimiz"} bgImage={bannerImg} />

            <div className="activities">
                <div className="container">
                    <div className="activities__wrapper">
                        {activities.map((activity, index) => {
                            return (
                                <div key={index} className="activity">
                                    <div className="activity__image">
                                        <img
                                            src={activity.imageUrl}
                                            alt={activity.name}
                                        />
                                    </div>
                                    <div className="activity__info">
                                        <img
                                            src={activity.icon}
                                            alt="Icon"
                                            width={40}
                                        />
                                        <h2>{activity.name}</h2>
                                        <Link
                                            to={activity.path}
                                            className="link link-1"
                                        >
                                            <span>Ətrəflı</span>
                                            <FaArrowRight
                                                color="#fff"
                                                size={20}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Activities;
