import Dog from './Dog';
import './DogList.css';

const DogList = () => {
  return (
    <div className="dogList">
      <h2> Dog List </h2>
      <Dog />
      <Dog />
      <Dog />
    </div>
  );
};

export default DogList;