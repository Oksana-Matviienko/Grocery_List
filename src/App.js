import './App.css';
import imgOne from "./shopping.jpg"
import imageTwo from "./main.jpg"
import { GroceryList } from './grocerylist';
function App() {
  return (
    <div>
      <div className='app'>
        <div className='container'>
        <img src={imgOne} alt="shopping" width="250px"/>
        </div>
        <div className='container'>
        <h1>Grocery List</h1>
        </div>
        <GroceryList/>
        <div className='container'>
        <img src={imageTwo} alt="man" width="250px"/>
        </div>
      </div>
    </div>
  );
}

export default App;
