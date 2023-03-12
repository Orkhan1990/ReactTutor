import React, { Component } from 'react';
import MovieLogo from '../../images/MOVIEDOM.png';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={MovieLogo} alt="" />
      </div>
    )
  }
}
