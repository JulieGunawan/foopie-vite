import React from "react";
import { data } from "../data";

const Counter = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    console.log(id);
    const newArray = people.filter((person) => person.id !== id);
    setPeople(newArray);
  };

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: "2rem" }}
        className="btn btn-block"
        onClick={clearAll}
      >
        Clear All
      </button>
    </div>
  );
};

export default Counter;
