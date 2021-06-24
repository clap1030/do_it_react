import React from 'react';
import PropTypes from 'prop-types';

//함수형 컴포넌트 , state와 생명주기 함수 사용 불가. 단순한구조의 UI컴포넌트를 제작할 때 많이 사용한다.

//classt선언이 아님.
function SFC(props, context) {
  const { somePropValue } = props;

  const { someContextValue } = contex;
  return <h1>Hello, {somePropValue}</h1>;
}

SFC.PropTypes = { somePropValue: PropTypes.any };
SFC.defaultPros = { somePropValue: 'default vlalue' };

export default SFC;
