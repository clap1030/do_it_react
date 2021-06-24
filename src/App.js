import TodaysPlan from './03/TodaysPlan';
import MyComponent from './03/MyComponent';
import PropsComponent from './03/PropsComponent';
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';
import IncreaseCountEx from './03/IncreaseCountEx';
import LifecycleExample from './03/LifecycleExample';
import Counter from './03/Counter';
import NewCounter from './03/NewCounter';
import React, { Component } from 'react';
import ListExample from './03/ListExample';
import ScrollSpy from './03/ScrollSpy';




class App extends Component{

  constructor(props){
    super(props);
    this.state = {count: 10};
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount() {
    this.setState(({count}) => ({ count: count + 10}) );
  }

  render() {
    return (
      <div>
          <ScrollSpy/>
        <ListExample/>
        <div>counter<Counter count={this.state.count} /></div>
        <div>NewCounter<NewCounter count={this.state.count} /></div>
        <button onClick={this.resetCount}>{this.state.count+10} 으로 초기화</button>
      </div>
     )
  }
}

export default App;
