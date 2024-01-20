import React from "react";
import { data } from "../data";

const Counter = () => {
  const [people, setPeople] = React.useState(data);
  const [value, setValue] = React.useState(0);
  const removeItem = (id) => {
    console.log(id);
    const newArray = people.filter((person) => person.id !== id);
    setPeople(newArray);
  };

  const clearAll = () => {
    setPeople([]);
  };

  const increaseCount = () => {
    setTimeout(() => {
      setValue((currentValue) => {
        return currentValue + 1;
      });
    }, 2000);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <div className="people">
              <h3>{name}</h3>
              <button
                type="button"
                className="btn"
                onClick={() => removeItem(id)}
              >
                remove
              </button>
            </div>
            <div className="counter">
              <h3>Counter: {value}</h3>
              <button type="button" className="btn" onClick={increaseCount}>
                Up
              </button>
            </div>
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
