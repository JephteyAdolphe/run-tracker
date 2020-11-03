import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
