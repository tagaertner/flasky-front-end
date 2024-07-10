import PropTypes from 'prop-types';
import Dog from './Dog';
import './DogList.css';

const DogList = (props) => {
    /* 

    We should be sure ot focus on the when the code here runs in the lifecycle of the component.
    Also, we should be sure to discuss that there are alternatives approaches to generating 
    a list of components.
    
    */
    
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

    return (
    <div className="dogList">
      <h2> Dogs </h2>
      <ul>{getDogListJSX(props.dogs)}</ul>
    </div>
  );
  };


/*

We could consider discussing the concept of Centralized Proptypes. 
In both Dog and DogList, we have a shared bit of prop types that we could define in a separate file
and import into both Dog and DogList. This would help to keep the prop types in sync.
So a common thing to see is to define that shared bit as a value (maybe DogType) in a separate file,
and then have both Dog and DogList import it for their prop types. 
https://www.bram.us/2017/12/03/react-pattern-centralized-proptypes/

*/


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