import React from "react";
import "./personBio.css";

export default ({ person }) => {
    return (
        <>
            <h3>{person.name}</h3>
            <h4>Bio</h4>
            <p>{person.biography}</p>
        </>
    );
};