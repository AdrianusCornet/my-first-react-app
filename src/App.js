import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Title } from "./components/Title";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < Greating />
        </header>

        <main>
          < Title />
        </main>
      </div>
    );
  }
}

class Greating extends React.Component {
  render() {
    return(
      <h1>Welcom to a Website</h1>
    )
  }
}

export default App;
