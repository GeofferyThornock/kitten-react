import React from "react";
import Activity from "./Activity";
import "./ActivityList.css";

function ActivityList({ activities }) {
    const list = activities.map(({ time, description }) => (
        <Activity time={time} description={description} />
    ));
    return activities.length ? list : null;
}

export default ActivityList;
