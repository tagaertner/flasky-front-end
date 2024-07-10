import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import DogList from './components/DogList';

export const URL = 'https://ada-flasky.onrender.com/dogs';

const App = () => {
  
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const newDogs = response.data.map((dog) => {
          return {
            id: dog.id,
            name: dog.name,
            breed: dog.breed,
            age: dog.age,
            chip: dog.chip,
          };
        });
        setDogs(newDogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addChip = (id) => {
    axios
      .patch(`${URL}/${id}/add_chip`)
      .then(response => {
        const newDog = response.data;
        const newDogs = dogs.map(dog => {
          if (dog.id === newDog.id) {
            return newDog;
          }
          return dog;
        });
        setDogs(newDogs);
      })
      .catch((error) => console.log(error));
  };

  const deleteDog = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newDogs = dogs.filter((dog) => dog.id !== id);
        setDogs(newDogs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flasky</h1>
      </header>
      <main>
        <div>
          <DogList
           dogs={dogs}
           addChipCallback={addChip}
           deleteDogCallback={deleteDog}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
