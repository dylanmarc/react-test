import React from 'react';
import Header from './components/Header.js';
import ContactCard from './components/ContactCard.js';
import logo from './logo.svg';
import './App.css';
import data from './data/employee.json';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <div className='employees'>
      {data.Employees.map(i => <ContactCard firstName={i.firstName} lastName={i.lastName} jobTitle={i.jobTitle} />)}
        </div>
        
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
