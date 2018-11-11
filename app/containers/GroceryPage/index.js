import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectGroceries } from 'containers/MapPage/selectors';
import GroceryListItem from 'components/GroceryListItem';

export class GroceryPage extends React.PureComponent {
  render() {
    console.log(this.props.groceries);
    return <GroceryListItem />;
  }
}

const mapStateToProps = createStructuredSelector({
  groceries: makeSelectGroceries(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(GroceryPage);
