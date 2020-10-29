import React from 'react';
import './css/App.css';
import { wobble, zoomIn, tada, lightSpeedIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import aaa from './images/aaa.jpg';
import AnimateImages from './animateImages';

const styles = {
  wobble: {
    animation: 'x 7s',
    animationName: Radium.keyframes(wobble, 'wobble')
  }
}

const tadas = {
  tada: {
    animation: 'x 5s',
    animationName: Radium.keyframes(tada, 'tada')
  }
}
const light = {
  lightSpeedIn: {
    animation: 'x 5s',
    animationName: Radium.keyframes(lightSpeedIn, 'lightSpeedIn')
  }
}
const zoom = {
  zoomIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  },

}

class App extends React.Component {
  render() {
    return (
      <StyleRoot>
        <div >
          <h3 style={tadas.tada} className="inces">My Incess</h3>
          <h2 style={styles.wobble} class="putri">Putri Ayu tingting</h2>
          <img src={aaa} style={zoom.zoomIn} />
          {/* <AnimateImages /> */}
          <h3 style={light.lightSpeedIn} className="inces">Have Nice Dream My Sweet Heart</h3>

        </div>
      </StyleRoot>
    );
  }
}

export default App;
