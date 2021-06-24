import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //카운트 초기값을 프로퍼티에서 전달된 값으로 설정한다.
      count: props.count,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    let { count } = this.state;
    return (
      <div>
        현재카운트: {count}
        <button onClick={this.increaseCount}>카운트++</button>
      </div>
    );
  }
}

export default Counter;
