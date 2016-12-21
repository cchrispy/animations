import React, { Component } from 'react';

import Box from './Box.jsx';

class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Box type='vibrate' />
          <Box type='slide' />
          <Box type='boing' />
          <Box type='entrance' />
        </div>
      </div>
    )
  }
}

export default Boxes;