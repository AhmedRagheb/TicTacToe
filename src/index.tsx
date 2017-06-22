import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './Content/index.css';
import Header from './Shared/Header';
import Game from './TicTacToe/Game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Header />
    <br />
    <Game />
  </div>
  ,
  document.getElementById('root')
);


registerServiceWorker();
