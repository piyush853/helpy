import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner'
import Appointment from './components/Appointment/Appointment';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
       <Features/>
      <Appointment/>
      <Banner/>
      <Footer/>
      
    </div>
  );
}

export default App;
