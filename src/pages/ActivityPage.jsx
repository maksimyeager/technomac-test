import { useParams } from "react-router-dom";
import { activities } from "../data/activities";

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
        </div>
    );
};

export default ActivityPage;
