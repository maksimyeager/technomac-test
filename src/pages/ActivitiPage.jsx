import { useParams } from "react-router-dom";
import { activities } from "../data/activities";

const ActivityPage = () => {
    const {activityName} = useParams();
    const activity = activities.find((activity) =>
        activity.path.includes(activityName)
    );
    console.log(activity);
    return (
        <div className="machine">
            <div className="container">
                <div className="machine__info">
                    <h2>{activity.name}</h2>
                    <p>
                       {activity.description}
                    </p>
                </div>
                <div className="machine__img">
                    <img src={activity.imageUrl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ActivityPage;
