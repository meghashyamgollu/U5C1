import { Books } from './components/Counter';
import { Pens } from './components/Counter';
import { Notebooks } from './components/Counter';
import { Inkpens } from './components/Counter';
import './App.css';

function App() {
  let books = 13;
  let pens = 10;
  let notebooks = 44;
  let inkpens = 78;
  return (
    <div className="App">
      Inventory
      <div className="items">
        <Books value={books}/>
      </div>
      <div className='items'>
        <Pens value= {pens}/>
      </div>
      <div className='items'>
        <Notebooks value = {notebooks}/>
      </div>
      <div className='items'>
        <Inkpens value= {inkpens}/>
      </div>
    </div>
  );
}

export default App;
