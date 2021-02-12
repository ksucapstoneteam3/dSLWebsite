import React from 'react';
import { Routes } from './Routes';
import { Navigation } from './components/Navigation';
import { Notice } from './components/Notice.js';
import { Searchbar } from './components/Searchbar.js';
import { Title } from './components/Title.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchBar } from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <Notice />
      <Searchbar />
      <Title />
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
