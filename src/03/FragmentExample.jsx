import React, { Component } from 'react';

class FragmentExample extends Component {
  render() {
    return ['div1', 'div2'].map((el) => <div>{el}</div>);
  }
}

export default FragmentExample;
