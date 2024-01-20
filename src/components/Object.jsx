import { useState } from "react";

const Object = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "Coding",
  });

  const displayPerson = () => {
    setTimeout(() => {
      setPerson({ name: "John", age: 28, hobby: "Scream at computer" });
    }, 3000);

    console.log(person.name, person.age, person.hobby);
  };

  return (
    <div>
      <h1>Name: {person.name}</h1>
      <h2>Age: {person.age}</h2>
      <h3>Enjoys: {person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Show John
      </button>
    </div>
  );
};

export default Object;
