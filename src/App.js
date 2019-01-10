import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Listings from './Components/Listings';
import Filter from './Components/Filter';
import listingsData from './Components/data/listingsData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Listings />
        
        
      </div>
    );
  }
}

export default App;
