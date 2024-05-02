import React, { useState } from "react";
import "./App.css";
import DogList from "./components/DogList";

const App = () => {
  const DOGS = [
    { id: 1, name: "flasky", age: "1", breed: "golden doodle", chip: "5388" },
    { id: 2, name: "sparky", age: "3", breed: "golden doodle", chip: "7269" },
    { id: 3, name: "spot", age: "10", breed: "golden doodle", chip: "" },
  ];
  
  const [dogs, setDogs] = useState(DOGS);

  //https://www.w3schools.com/js/js_random.asp
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const addChip = (id) => {
    const newDogs = dogs.map((dog) => {
      if (dog.id === id) {
        return {
          ...dog,
          chip: String(getRndInteger(1000, 9999)),
        };
      }
      return dog;
    });
    setDogs(newDogs);
  };

  const deleteDog = (id) => {
    const newDogs = dogs.filter((dog) => dog.id !== id);
    setDogs(newDogs);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flasky</h1>
      </header>
      <main>
        <div>
          <DogList
           dogs={DOGS}
           addChipCallback={addChip}
           deleteDogCallback={deleteDog}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
