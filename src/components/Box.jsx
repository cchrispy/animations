import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vibrate: <div className='ball vibrate'></div>,
      slide: <div className='ball slide'></div>,
      boing: <div className='ball-lg boing'></div>,
      entrance: <div className='ball-lg entrance'></div>
    };
  }

  party(animation) {
    if (animation === 'vibrate') {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => this.state.vibrate);
    }
    if (animation === 'slide') {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => this.state.slide);
    }
    if (animation === 'boing') {
      return this.state.boing;
    }
    if (animation === 'entrance') {
      return this.state.entrance;
    }
  }

  render() {
    return (
      <div className={`col-lg-3 col-md-4 col-sm-6 box text-center`} >
        { this.party(this.props.type) }
      </div>
    )
  }
}

export default Box;