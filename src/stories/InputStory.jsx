import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../03/Input';

// Input: 컴포넌트를 임포트
// 기본설정: 스토리북 도구에 표시할 메뉴 이름 입력
/*
storiesOf('Input', module)
  .add('기본 설정', () => <Input name="name" />)
  .add('label 예제', () => <Input name="name" label="이름" />)
  .add('onChange 예제', () => <Input name="name" onChange={action('onChange이벤트발생!')} />);
*/

storiesOf('Input', module)
  .addWithJSX('기본 설정', () => <Input name="name" />)
  .addWithJSX('label 예제', () => <Input name="name" label="이름" />)
  .addWithJSX('onChange 예제', () => (
    <Input name="name" onChange={action('onChange이벤트발생!')} />
  ));
