import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";
import LightSwitch from './components/LightSwitch';
import User from './components/User';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < Greating />
        </header>

        <main>
          <br />
          <br />
          < Title content='Ik ben een titel' />
          < LightSwitch />
          <br />
          <br />
          < User name='Adrianus 0' />
          < User name='Adrianus 1' />
          < User name='Adrianus 2' />
          < User name='Adrianus 3' />
          <br />
          <br />
        </main>
      </div>
    );
  }
}

class Greating extends React.Component {
  render() {
    return (
      <h1>Welcom to a Website</h1>
    )
  }
}

export default App;
