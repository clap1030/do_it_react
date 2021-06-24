import React from 'react';

class Counter3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increateCount = this.increateCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }
  increateCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  resetCount() {
    this.setState({ count: 0 });
  }

  keyDown() {
    this.setState({ count: 100 });
  }

  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button onClick={this.increateCount} onMouseOut={this.resetCount} onKeyPress={this.keyDown}>
          카운트 증가
        </button>
        버튼 밖으로 커서가 움직이면 0으로 초기화
      </div>
    );
  }
}

export default Counter3;
