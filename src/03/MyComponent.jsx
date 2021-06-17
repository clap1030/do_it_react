import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    console.log(this.props);
    const name = this.props.name;
    return <div>`상위컴포넌트에서 전달받은 프로터피의 값은 {name} 이다.`</div>;
  }
}

export default MyComponent;
