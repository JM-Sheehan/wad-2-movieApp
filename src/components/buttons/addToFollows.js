import React, { useContext } from "react";
import {PeopleContext} from "../../contexts/peopleContext";

const AddToFollows = ({ person }) => {
  const context = useContext(PeopleContext);

  const handleAddToFollows = e => {
    e.preventDefault();
    context.addToFollows(person.id);
  };

  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFollows}
    >
      Follow Person
    </button>
  );
};

export default AddToFollows;