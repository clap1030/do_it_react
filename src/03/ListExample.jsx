//rpc
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ListExample extends PureComponent {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    //const prices = priceList.map((price) => <div>가격: {price}원</div>);
    return (
      <div>
        <label>가격목록</label>
        {priceList.map((price, i) => (
          <div key={i}>가격: {price}원</div>
        ))}
      </div>
    );
  }
}

ListExample.propTypes = {};

export default ListExample;
