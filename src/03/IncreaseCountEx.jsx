import React, { Component } from 'react';

class IncreaseCountEx extends Component {
  constructor(props) {
    super(props);

    //state정의
    this.state = {
      count: 0,
    };

    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  render() {
    return (
      <div>
        <span>카운트: {this.state.count}</span>
        <button onClick={this.increaseCount}>카운트++</button>
      </div>
    );
  }
}

export default IncreaseCountEx;
