import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewDogForm.css';

const NEW_DOG = {
  name: '',
  breed: '',
  age: '',
}

const NewDogForm = ({ addDogCallback }) => {
  const [dogData, setDogData] = useState(NEW_DOG);

  const submitDogData = (e) => {
    e.preventDefault();

    addDogCallback(dogData);
    setDogData(NEW_DOG);
  };

  const handleChange = (e) => {
    setDogData({ ...dogData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitDogData} className="newDogForm">
      <section>
        <h2>Add a Dog</h2>
        <div className="newDogFields">
          <label htmlFor="name">Name</label>
          <input
            name="name"

            // useID can be used to link a label to an input. In case students ask about it, 
            // here is a link to the React useID documentation: https://react.dev/reference/react/useId
            id="name"
            value={dogData.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Breed</label>
          <input
            name="breed"
            id="breed"
            value={dogData.breed}
            onChange={handleChange}
          />
          <label htmlFor="age">Age</label>
          <input
            name="age"
            id="age"
            value={dogData.age}
            onChange={handleChange}
          />

          <button className="button newDogSubmit" type="submit">
            Add Dog
          </button>
        </div>
      </section>
    </form>
  );
};

NewDogForm.propTypes = {
  addDogCallback: PropTypes.func.isRequired,
};

export default NewDogForm;