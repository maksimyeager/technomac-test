import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import userHelmetSafetySvg from "../assets/icons/user-helmet-safety.svg";

import activity1 from "../assets/projects/project-1.jpg";
import activity2 from "../assets/projects/project-2.jpg";
import activity3 from "../assets/projects/project-3.jpg";
import activity4 from "../assets/projects/project-5.jpg";
import activity5 from "../assets/projects/project-6.jpg";

const activities = [
    {
        name: "Tikinti sahəsinin hazırlanmas",
        imageUrl: activity1,
    },
    {
        name: "Yol tikintisi",
        imageUrl: activity2,
    },
    {
        name: " Su anbarlarının tikintisi",
        imageUrl: activity1,
    },
    {
        name: " Su kanallarının qazıntısı",
        imageUrl: activity3,
    },
    {
        name: "Su elektrik stansiyalarının tikintisi",
        imageUrl: activity4,
    },
    {
        name: "Beton işlərin görülməsi",
        imageUrl: activity5,
    },
    {
        name: "Metal konstruksiyaların qurulması",
        imageUrl: activity3,
    },
    {
        name: " Boruların sahədə qaynaq işlərinin aparılması",
        imageUrl: activity4,
    },
    {
        name: "Hidro Elektrik Stansia",
        imageUrl: activity4,
    },
    {
        name: "Güneş Elektrik Stansia",
        imageUrl: activity3,
    },
];

const Activities = () => {
    return (
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
                                            src={userHelmetSafetySvg}
                                            alt="Icon"
                                            width={40}
                                        />
                                        <h2>{activity.name}</h2>
                                        <Link to={"#"}>
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
    );
};

export default Activities;
