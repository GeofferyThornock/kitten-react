import React from "react";
import "./Header.css";

function Header({ name, imageSrc, birthday }) {
    return (
        <header className="headerContainer">
            <img alt={name} src={imageSrc}></img>
            <div className="articles">
                <h1>{name}</h1>
                <h2>{birthday}</h2>
            </div>
        </header>
    );
}

export default Header;
