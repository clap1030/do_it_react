import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends Component {
  render() {
    const {
      booleanValue,
      numberValue,
      arrayValue,
      objValue,
      nodeValue,
      funcValue,
      booleanBlankValue,
      booleanDefaultValue,
      children,
    } = this.props;
    return (
      <div>
        <div>문자열: {this.props.name}</div>
        <div>booleanValue: {String(booleanValue)} </div>
        <div>booleanBlankValue: {String(booleanBlankValue)} </div>
        <div>booleanDefaultValue: {String(booleanDefaultValue)} </div>
        <div>numberValue: {numberValue}</div>
        <div>arrayValue: {arrayValue}</div>
        <div>objValue: {String(Object.entries(objValue))}</div>
        <div>nodeValue: {nodeValue}</div>
        <div>funcValue: {String(funcValue)}</div>
        <div>{children}</div>
      </div>
    );
  }
}

PropsComponent.propTypes = {
  name: PropTypes.string, //문자열형 프로퍼티
  booleanValue: PropTypes.bool,
  booleanBlankValue: PropTypes.bool,
  numberValue: PropTypes.number,
  arrayValue: PropTypes.array,
  objValue: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
  }), //PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
  children: PropTypes.node,
};

PropsComponent.defaultProps = {
  booleanDefaultValue: false, //선언하지 않으면 undefined
};

export default PropsComponent;
