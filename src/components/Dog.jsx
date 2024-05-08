import { useState } from 'react';
import PropTypes from 'prop-types';
import './Dog.css';

const Dog = (props) => {

    /*
    
    Be sure to discuss how the following line is anti-pattern. 
    In React, we should not "cache" props in state.
    Doing so can lead to bugs and unexpected behavior as well as cause the component to be out of sync
    with subsequent updates to the props. 

    */

    const [chipNum, setChipNum] = useState(props.chip);

    //https://www.w3schools.com/js/js_random.asp
    const getRndInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };
  
    const createChip = () => {
      setChipNum(getRndInteger(1000, 9999));
    };
    
    return (
        <li className='dog'>
          <h2>
            {props.name}
            <button className="delete__dog">delete</button>
          </h2>

          {chipNum ? (
            <span>Chip #: {chipNum}</span>
          ) : (

            // Discuss how React is going to pass event detials as the first argument to the function
            // createChip and we are choosing to ignore it.
            <button onClick={() => createChip()}>add chip</button>
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