import React from 'react';
import './css/App.css';
import { rollIn, zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import aaa from './images/aaa.jpg';
const styles = {
  rollIn: {
    animation: 'x 10s',
    animationName: Radium.keyframes(rollIn, 'rollIn')
  }
}
const zoom = {
  zoomIn:{
    animation: 'x 10s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  },
 
}

function App() {
  return (
    <StyleRoot>
    <div >      
    <h3 className="inces">My Incess</h3>
      <h2 style={styles.rollIn} class="putri">Putri Ayu tingting</h2>
      <img src={aaa} style={zoom.zoomIn}/>
    </div>
    </StyleRoot>
  );
}

export default App;
