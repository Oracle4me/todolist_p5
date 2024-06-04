import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './page/LandingPage';
import About from './page/About';
import Update from './page/Update';
function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/about" element={<About />} />
        </Routes >
      </Router >
    </div >
  );
}


export default App;
