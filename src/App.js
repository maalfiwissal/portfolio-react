import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Nav from './components/Nav';
import './App.css';
import Footer from './components/Footer';
import Formations from './components/Formations';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Aceuil from './components/Aceuil';
import Experiences from './components/Experiences';
import Projets from './components/Projets';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="App">
    <Header />
    
    <Router>
       <Nav />
      <Routes>
         <Route  path="/" element= {<Aceuil/>}></Route>
         <Route  path="/formations" element= {<Formations/>}></Route>
         <Route  path="/experiences" element= {<Experiences/>}></Route>
         <Route  path="/projets" element= {<Projets/>}></Route>
         <Route  path="/certifications" element= {<Certifications/>}></Route>
      </Routes>
    </Router>
   

    <Footer />
  </div>
  );
}

export default App;
