import './App.css';
import Search from './Search';
import logos from './logo.svg';

function App() {
  return (
    <div className="App">
        <img className="logo" src={logos}></img>
      <Search/>
    </div>
  );
}

export default App;
