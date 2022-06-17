import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  
  const playAudio = (id) => {
    console.log(document.getElementById(id))  
    document.getElementById(id).play()
  }

  return (
    <div className="App" id='drum-machine'>
      <div id='display'>
        <div className='row'>
          <div className='drum-pad col-4 btn btn-success' id='drum-q' onClick={playAudio("Q")}>            
            Q
            <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          </div>
          <div className='drum-pad col-4 btn btn-success' id='drum-w'>
            W
            <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          </div>
          <div className='drum-pad col-4 btn btn-success' id='drum-e'>
            E
            <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          </div>
        </div>
        <div className='row'>
          <div className='drum-pad col-4 btn btn-success' id='drum-a'>
            A
            <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          </div>
          <div className='drum-pad col-4 btn btn-success' id='drum-s'>
            S
            <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>  
          </div>
          <div className='drum-pad col-4 btn btn-success' id='drum-d'>
            D
            <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          </div>
        </div>
        <div className='row'>
          <div className='drum-pad col-4 btn btn-success' id='drum-z'>
            Z
            <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>  
          </div>
          <div className='drum-pad col-4 btn btn-success' id='drum-x'>
            X
            <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>  
          </div>
          <div className='drum-pad col-4 btn btn-success' id='drum-c'>
            C
            <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
