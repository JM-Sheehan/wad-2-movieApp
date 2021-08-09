import React from "react";
import Person from "../personCard/";
import "./peopleList.css";

const PeopleList = ({people, action}) => {
  const peopleCards = people.map(p => (
    <Person key={p.id} formatting = "col-sm-3" person={p} action={action} />
  ));
  return <div className="row people bg-muted">{peopleCards}</div>;
};

export default PeopleList;