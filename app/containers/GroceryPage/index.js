import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectGroceries } from 'containers/App/selectors';
import GroceryListItem from 'components/GroceryListItem';

export class GroceryPage extends React.PureComponent {
  render() {
    return this.props.groceries.map(el => {
      // name: el.name,
      // price: el.price,
      // qty: el.quantity,
      // img: el.image
      return <GroceryListItem name={el.name} price={el.price} img={el.image} qty={el.quantity}/>;
    });
  }
}

const mapStateToProps = createStructuredSelector({
  groceries: makeSelectGroceries(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(GroceryPage);
