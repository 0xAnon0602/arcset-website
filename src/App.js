import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Error404 from './components/404';
import Vision from './subcomponents/About/Vision';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>

      <div className="container">
        
        <div className="content">
          <Navbar/>
          <Routes>

            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />

            <Route path="/about/vision-mission" element={<Vision />} />
            
            
            <Route path="*" element={<Error404 />} />

          </Routes>
        </div>
        <Footer/>

      </div>


    </div>
  );
}

export default App;
