import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardLayout from './Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DashboardLayout />
      </div>
    );
  }
}

export default App;
