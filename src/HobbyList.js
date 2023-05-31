import React from "react";
import "./HobbyList.css";

function HobbyList({ hobbies }) {
    const list = hobbies.map((i) => <li>{i}</li>);
    return hobbies.length ? (
        <div>
            <h4>Hobbies</h4>
            <ul>{list}</ul>
        </div>
    ) : null;
}

export default HobbyList;
