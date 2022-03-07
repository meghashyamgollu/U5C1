import Books from './components/Counter';
import './App.css';

function App() {
  let books = 13
  return (
    <div className="App">
      <div className="items">
        <Books value={books}/>
      </div>
    </div>
  );
}

export default App;
