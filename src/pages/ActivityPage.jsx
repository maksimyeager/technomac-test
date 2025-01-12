import { useParams } from "react-router-dom";
import { getActivities } from "../data/activities";
import { useTranslation } from "react-i18next";

const ActivityPage = () => {
    const { t } = useTranslation("global");

    const activities = getActivities(t);
    const { activityName } = useParams();
    const activity = activities.find((activity) =>
        activity.path.includes(activityName)
    );
    console.log(activity.images);
    return (
        <div className="page">
            <div className="container">
                <div className="page__info">
                    <h2>{activity.name}</h2>
                    <p>{activity.description}</p>
                </div>
                <div className="page__img">
                    <img src={activity.imageUrl} alt="" />
                </div>
                <div className="page__title">
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
