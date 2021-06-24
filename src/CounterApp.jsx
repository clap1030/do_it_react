import React from 'react';
import Counter from './03/Counter2';
import Counter3 from './03/Counter3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.increateCount = this.increateCount.bind(this);
  }
  increateCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return <Counter3 />;
  }
}

export default App;
