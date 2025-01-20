import { useParams } from "react-router-dom";
import { getActivities } from "../data/activities";
import { useTranslation } from "react-i18next";

import logo2 from "../assets/logo-2.jpg"
import icon from "../assets/&.png"

const ActivityPage = () => {
    const { t } = useTranslation("global");

    const activities = getActivities(t);
    const { activityName } = useParams();
    const activity = activities.find((activity) =>
        activity.path.includes(activityName)
    );
    return (
        <div className="page">
            <div className="container">
                <div className="page__info">
                    {activity.path.includes("celik-construction") && (
                        <div className="partners">
                            <img src={logo2} alt="" />
                        </div>
                    )}
                    <h2>{activity.name}</h2>
                    <ul>
                        {activity.list.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </ul>
                    {activity.path.includes("celik-construction") && (
                        <a
                            href="https://www.tersanmetal.com.tr/"
                            className="page__link"
                        >
                            tersanmetal.com
                        </a>
                    )}
                </div>
                <div className="page__img">
                    <img src={activity.imageUrl} alt="" />
                </div>
                <div className="page__title">
                {activity.path.includes("celik-construction") && (
                        <div className="partners">
                            <img src={logo2} alt="" />
                        </div>
                    )}
                    <h2>{activity.name}</h2>
                </div>
            </div>
            <div className="page__images">
                <div className="container">
                    {activity.images.map((img, index) => {
                        return (
                            <div className="" key={index}>
                                <img src={img} alt="" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ActivityPage;
