import React, { useContext } from "react";
import { PeopleContext } from "../../contexts/peopleContext";

const Unfollow = ({ person }) => {
    const context = useContext(PeopleContext);

    const handleUnfollow = e => {
        e.preventDefault();
        context.unfollow(person.id);
    }
    return (
        <button
            type="button"
            className="btn w-100 btn-primary"
            onClick={handleUnfollow}
        >
            Unfollow
        </button>
    );
};

export default Unfollow;