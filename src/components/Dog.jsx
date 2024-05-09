import PropTypes from 'prop-types';
import './Dog.css';

const Dog = (props) => {
    return (
        <li className='dog'>
          <h2>
            {props.name}
          // Highlight why we need to use an arrow function here and not just pass the function directly.
            <button onClick={() => props.deleteDogCallback(props.id)}>
              delete
            </button>
          </h2>

          {props.chip ? (
            <span>Chip #: {props.chip}</span>
          ) : (
            <button onClick={() => props.addChipCallback(props.id)}>
              add chip
            </button>
          )}
    </li>
    );
  };

Dog.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    chip: PropTypes.string.isRequired,

    // Another naming convention is the OnEvent convention, 
    // which is to think of these as representing events. (onAddChip, onDeleteDog)
    addChipCallback: PropTypes.func.isRequired,
    deleteDogCallback: PropTypes.func.isRequired,
  };

export default Dog;