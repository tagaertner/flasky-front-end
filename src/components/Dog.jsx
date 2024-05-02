import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Dog.css";

const Dog = (props) => {
    const [chipNum, setChipNum] = useState(props.chip);

    //https://www.w3schools.com/js/js_random.asp
    const getRndInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };
  
    const createChip = () => {
      setChipNum(getRndInteger(1000, 9999));
      console.log();
    };
    
    return (
        <li>
          <h2>
            {props.name}
            <button className="delete__dog">delete</button>
          </h2>

          {chipNum ? (
            <span>Chip #: {chipNum}</span>
          ) : (
            <button onClick={createChip}>add chip</button>
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
  };

export default Dog;