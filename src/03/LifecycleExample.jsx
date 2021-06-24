import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifecycleExample extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log(`getDerivedStateFromProps 호출`);
    return {};
  }

  constructor(props) {
    super(props);
    console.log('constructor 호출');
  }

  componentWillMount() {
    console.log(' componentWillMount 호출 ');
  }

  componentDidMount() {
    console.log(' componentDidMount 호출 ');
    //this.setState({ updated: true });
    this.forceUpdate();
  }

  componentWillReceiveProps(nextProps) {
    console.log(' componentWillReceiveProps 호출 ');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(' shouldComponentUpdate 호출 ');
    return false;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(' componentWillUpdate 호출 ');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(' componentDidUpdate 호출 ');
  }

  componentWillUnmount() {
    console.log(' componentWillUnmount 호출 ');
  }

  render() {
    console.log(' render 호출 ');
    return null;
  }
}

//LifecycleExample.propTypes = {};

export default LifecycleExample;
