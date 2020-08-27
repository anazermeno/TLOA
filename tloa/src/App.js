import React from 'react';
import Sidemenu from './components/sidemenu';
import About from './components/about';
import './App.css';

function App() {
  return (
    <div className="App">
        <Sidemenu></Sidemenu>
        <About></About>
    </div>
  );
}

export default App;
