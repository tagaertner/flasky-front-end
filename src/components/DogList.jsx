import PropTypes from 'prop-types';
import Dog from './Dog';
import './DogList.css';

const DogList = (props) => {
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
          />
        );
      });
    };
    return <ul className="dogs__list">{getDogListJSX(props.dogs)}</ul>;
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
  };
  
export default DogList;