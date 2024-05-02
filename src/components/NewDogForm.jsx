import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewDogForm.css';

const NewDogForm = ({ addDogCallback }) => {
  const [dogData, setDogData] = useState({
    name: '',
    breed: '',
    age: '',
  });

  const submitDogData = (e) => {
    e.preventDefault();

    addDogCallback(dogData);
    setDogData({ name: '', breed: '', age: '' });
  };

  const handleChange = (e) => {
    setDogData({ ...dogData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitDogData} className="new-dog__form">
      <section>
        <h2>Add a Dog</h2>
        <div className="new-dog__fields">
          <label htmlFor="name">Name</label>
          <input
            name="name"
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

          <button className="button new-dog__submit" type="submit">
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