import React, { useEffect, createContext, useReducer } from "react";
import { getPopularPeople} from "../api/tmdb-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-follow":
      return {
        people: state.people.map((p) =>
          p.id === action.payload.people.id ? { ...p, follow: true } : p
        )
      };
    case "load":
      return { people: action.payload.people};
    default:
      return state;
  }
};

const PeopleContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { people: []});

  const addToFollows = (personId) => {
    const index = state.people.map((p) => p.id).indexOf(personId);
    dispatch({ type: "add-follow", payload: { people: state.people[index] } });
  };


  useEffect(() => {
    getPopularPeople().then((people) => {
      dispatch({ type: "load", payload: { people } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <PeopleContext.Provider
      value={{
        people: state.people,
        addToFollows: addToFollows,
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;