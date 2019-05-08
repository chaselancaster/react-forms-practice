import React from "react";

const ShowDogs = ({ dogs }) => (
  <div>
    {dogs.map((dog, i) => (
      <div key={i}>
        <h3>{dog.name}</h3>
        <h3>{dog.age}</h3>
        <h3>{dog.breed}</h3>
      </div>
    ))}
  </div>
);

export default ShowDogs;
