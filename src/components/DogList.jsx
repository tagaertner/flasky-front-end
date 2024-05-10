import PropTypes from 'prop-types';
import Dog from './Dog';
import './DogList.css';

const DogList = ({ dogs, addChipCallback, deleteDogCallback }) => {
    const getDogListJSX = (dogs) => {
      return dogs.map((dog) => {
        return (
          <Dog
            key={dog.id}
            id={dog.id}
            name={dog.name}
            breed={dog.breed}
            age={dog.age}
            chip={dog.chip}
            addChipCallback={addChipCallback}
            deleteDogCallback={deleteDogCallback}
          />
        );
      });
    };
    return (
      <div className="dogList">
        <h2> Dogs </h2>
        <ul>{getDogListJSX(dogs)}</ul>
      </div>
    );
  };

DogList.propTypes = {
    dogs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        breed: PropTypes.string.isRequired,
        chip: PropTypes.string.isRequired,
      })
    ).isRequired,
    addChipCallback: PropTypes.func.isRequired,
    deleteDogCallback: PropTypes.func.isRequired,
  };
  
export default DogList;