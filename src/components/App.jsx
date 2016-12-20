import React, { Component } from 'react';
import '../styles/styles.scss';

import Boxes from './Boxes.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className='page-header'>
          <h1 className='appTitle'>CSS Animations</h1>
        </div>
        <Boxes />
      </div>
    )
  }
}

export default App;