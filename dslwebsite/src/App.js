import React from 'react';
import { Routes } from './Routes';
import { Navigation } from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
