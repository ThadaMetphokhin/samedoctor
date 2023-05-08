import React from 'react';
import logo from './logo.svg';
//Navbar
import Navbar1 from './Component/Navbar'
//Section
import Section from './Component/Section'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Section/>
    </div>
  );
}

export default App;
