import React, { Component } from 'react';
import './css/Footer.css';
import Moment from 'moment';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styleFade = {
  fadeIn: {
    animation: 'x 10s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

class Header extends Component {
  render(){
    let time = require('moment/locale/en-in');
    Moment.updateLocale('en-in', time);
  return (
    <StyleRoot>
    <div className="time" style={styleFade.fadeIn}>
      <p >
        {Moment().format('dddd')},
        {Moment().format('LLL')}
      </p>
      </div>
    </StyleRoot>
  );
  }
}

export default Header;
