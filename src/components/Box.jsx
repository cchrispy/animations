import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vibrate: <div className='ball vibrate'></div>,
      slide: <div className='slide'><div className='ball'></div></div>,
    };
  }

  party(animation) {
    if (animation === 'vibrate') {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => this.state.vibrate);
    }
    if (animation === 'slide') {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => this.state.slide);
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