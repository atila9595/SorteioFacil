import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Data from '../src/components/Data'
import Hook from './components/HookuseState';

function App() {
  return (
    <div className="App container">
      <NavBar />
      <h1>Ola React!'</h1>
      <Data />
      <Hook />
    </div>
  );
}



export default App;