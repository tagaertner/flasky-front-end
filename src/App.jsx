import './App.css';
import DogList from './components/DogList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flasky</h1>
      </header>
      <main>
        <div>
          <DogList />
        </div>
      </main>
    </div>
  );
};

export default App;
