import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App" id='drum-machine'>
      <div id='display'>
        <div className='row'>
          <div className='drum-pad col-4' id='drum-q'>Q</div>
          <div className='drum-pad col-4' id='drum-w'>W</div>
          <div className='drum-pad col-4' id='drum-e'>E</div>
        </div>
        <div className='row'>
          <div className='drum-pad col-4' id='drum-a'>A</div>
          <div className='drum-pad col-4' id='drum-s'>S</div>
          <div className='drum-pad col-4' id='drum-d'>D</div>
        </div>
        <div className='row'>
          <div className='drum-pad col-4' id='drum-z'>Z</div>
          <div className='drum-pad col-4' id='drum-x'>X</div>
          <div className='drum-pad col-4' id='drum-c'>C</div>
        </div>
      </div>
    </div>
  );
}

export default App;
