import React from 'react';
import './App.css';
import Header from './components/layouts/header';


class App extends Header {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Dani</h1>
      </div>
    );
  }
}

export default App;
