import React from 'react';
import './css/Header.css';
import { zoomInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  zoomInDown: {
    animation: 'x 10s',
    animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
  }
}

class Header extends React.Component {
  render(){
  
  return (
    <StyleRoot>
      <div className="goodnight" style={styles.zoomInDown}>
        <h2 >Good Night</h2>
      </div>
    </StyleRoot>
  );
  }
}

export default Header;
