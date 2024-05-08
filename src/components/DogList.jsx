import Dog from './Dog';
import './DogList.css';

const DogList = () => {
  return  (
    <div>
      <h2 id='dogListHeader'> Dog List </h2>
      <Dog />
      <Dog />
      <Dog />
    </div>
)
};

export default DogList;