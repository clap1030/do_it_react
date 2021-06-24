import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    //state정의
    this.state = {
      loading: true,
      formData: 'no data',
    };

    this.handleData = this.handleData.bind(this);

    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    const { formData } = this.state;

    //컴포넌트의 내장 함수 this.setState()를 사용하여 state값 변경가능
    this.setState((preState) => ({
      loading: false,
      formData: data + formData,
      preData: preState,
    }));

    console.log(this.state.preData);
  }

  render() {
    return (
      <div>
        <span>로딩중 : {String(this.state.loading)}</span>
        <span>결과 : {this.state.formData}</span>
        <span>이전결과 : {String(this.state.preData)}</span>
      </div>
    );
  }
}

export default StateExample;
