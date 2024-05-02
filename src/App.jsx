import './App.css';
import DogList from './components/DogList';

const App = () => {
  const DOGS = [
    { id: 1, name: 'flasky', age: '1', breed: 'golden doodle', chip: '5388' },
    { id: 2, name: 'sparky', age: '3', breed: 'golden doodle', chip: '7269' },
    { id: 3, name: 'spot', age: '10', breed: 'golden doodle', chip: '' },
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flasky</h1>
      </header>
      <main>
        <div>
          <DogList dogs={DOGS}/>
        </div>
      </main>
    </div>
  );
};

export default App;
