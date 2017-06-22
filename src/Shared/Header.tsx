import * as React from 'react';
import '../Content/App.css';

const logo = require('../Content/logo.svg');

class App extends React.Component<{}, null> {

  createHeader() {
    var header = (
        <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>TicTacToe</h2>
        </div>
      );
    return header;
  }

  render() {
    return (
      <div className="App">
        {this.createHeader()}
      </div>
    );
  }
}

export default App;

