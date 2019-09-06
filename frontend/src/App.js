import React from 'react';
import './App.css';
import logo from './henesis.png';
import EventList from './containers/EventList';
import MetaData from './containers/MetaData';
function App() {
  return (
    <div className="App">
      <img alt="logo" className="logo" src={logo} />
      <h1> Cryptokitties Event Watcher</h1>
      <MetaData />
      <EventList />
    </div>
  );
}

export default App;