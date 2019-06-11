import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < Greating />
          {'im a stirn'}
          {/* im a commant */}
          { 5 + 5 }
          < br/>
          { !true }
          { {test:'test'}.test}
          < Greating />
        </header>
      </div>
    );
  }
}

class Greating extends React.Component {
  render() {
    return(
      <h1>Hallo</h1>
    )
  }
}

export default App;
