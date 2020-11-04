import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
