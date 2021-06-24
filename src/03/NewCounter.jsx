import React, { Component } from 'react';

class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }

  //부모컴포넌트로 부터 받은 값을 갱신
  static getDerivedStateFromProps(props, state) {
    console.log('newCounter getDerivedStateFromProps');
    const { count } = props;
    console.log(count, state.newCount);
    return {
      count,
      newCount: count === state.count ? state.newCount : count,
    };
  }

  increaseCount() {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1,
    }));
  }

  render() {
    let { newCount } = this.state;
    return (
      <div>
        현재카운트: {newCount}
        <button onClick={this.increaseCount}>카운트++</button>
      </div>
    );
  }
}

export default NewCounter;
