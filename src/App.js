import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { playSound } from './features/drumpad/drumpadSlice'

function App() {
  
  const soundType = useSelector(state => state.drumpad.value)
  const dispatch = useDispatch()  
  const mapSounds = {
    Q: 'Heater1',
    W: 'Heater2',
    E: 'Heater3',
    A: 'Heater4',
    S: 'Heater5',
    D: 'Heater6',
    Z: 'Heater7',
    X: 'Heater8',
    C: 'Heater9'
  }
  
  document.addEventListener("keypress", function onEvent(event) {
    // console.log(typeof event.key)
    dispatch(playSound(event.key.toUpperCase()))
  })

  
  return (
    <div className="App" id='drum-machine'>
      <div id='display'>
        <div className='row'>
          <div className='drum-pad col-3 btn btn-success' id='drum-q' onClick={() => dispatch(playSound("Q"))}>            
            Q
            <audio id="Q" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          </div>
          <div className='drum-pad col-3 btn btn-success' id='drum-w' onClick={() => dispatch(playSound("W"))}>
            W
            <audio id="W" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
          </div>
          <div className='drum-pad col-3 btn btn-success' id='drum-e' onClick={() => dispatch(playSound("E"))}>
            E
            <audio id="E" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
          </div>
          <div id="som" className='col-4 btn btn-warning'>
            {mapSounds[soundType]}
          </div>
        </div>
        <div className='row'>
          <div className='drum-pad col-3 btn btn-success' id='drum-a' onClick={() => dispatch(playSound("A"))}>
            A
            <audio id="A" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          </div>
          <div className='drum-pad col-3 btn btn-success' id='drum-s' onClick={() => dispatch(playSound("S"))}>
            S
            <audio id="S" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>  
          </div>
          <div className='drum-pad col-3 btn btn-success' id='drum-d' onClick={() => dispatch(playSound("D"))}>
            D
            <audio id="D" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
          </div>

        </div>
        <div className='row'>
          <div className='drum-pad col-3 btn btn-success' id='drum-z' onClick={() => dispatch(playSound("Z"))}>
            Z
            <audio id="Z" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>  
          </div>
          <div className='drum-pad col-3 btn btn-success' id='drum-x' onClick={() => dispatch(playSound("X"))}>
            X
            <audio id="X" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>  
          </div>
          <div className='drum-pad col-3 btn btn-success' id='drum-c' onClick={() => dispatch(playSound("C"))}>
            C
            <audio id="C" className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
