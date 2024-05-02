import PropTypes from "prop-types";
import "./Dog.css";

const Dog = ({ id, name, chip, addChipCallback, deleteDogCallback }) => {
    return (
        <li>
          <h2>
            {name}
            <button onClick={() => deleteDogCallback(id)}>
              delete
            </button>
          </h2>

          {chip ? (
            <span>Chip #: {chip}</span>
          ) : (
            <button onClick={() => addChipCallback(id)}>
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
    addChipCallback: PropTypes.func.isRequired,
    deleteDogCallback: PropTypes.func.isRequired,
  };

export default Dog;