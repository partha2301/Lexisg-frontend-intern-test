import React from 'react';
import './App.css';
import Lexibrief from './components/lexibrief';
import UserInterface from './components/userInterface';

function App() {
  return (
    <div className="App">
      <Lexibrief/>
      <UserInterface />
    </div>
  );
}

export default App;