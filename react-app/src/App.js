import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1> Baseball Dashboard</h1>
      </header>
      <main>
        <Dashboard/>
      
      </main>
    </div>
  );
}

export default App;
