import './App.css';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App container">
      <NavBar />
      <Outlet />
      
    </div>
  );
}



export default App;