import React, { Component } from 'react';

class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);
    //클래스 변수 정의
    this.loading = true;
    this.formData = 'no data';

    this.handleData = this.handleData.bind(this);

    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    //클래스변수 변경
    this.loading = false;
    this.formData = data + this.formData;
    //클래스 인스턴스 변수와 화면을 강제로 출력해주는 함수
    //리액트 성능상 제약이 있으므로 사용하지 않는것을 추천
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <span>로딩중 : {String(this.loading)}</span>
        <span>결과 : {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
