import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={`col-lg-3 col-md-4 col-sm-6 box text-center`} >
        <div className='ball'>

        </div>
        <button type='button' className='btn btn-primary btn-block'>
          { this.props.color }
        </button>
      </div>
    )
  }
}

export default Box;