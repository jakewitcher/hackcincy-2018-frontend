import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectGroceries } from 'containers/App/selectors';
import GroceryListItem from 'components/GroceryListItem';
import Panel from './Panel';
import Layout from './Layout';

export class GroceryPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Layout>
          {this.props.groceries.map((el, i) => (
            <GroceryListItem key={i} name={el.name} price={el.price} img={el.image} qty={el.quantity} />
          ))}
        </Layout>

        <Panel>
          <h1>Total:
            {/* <GroceryListItem total={parseFloat((el.quantity)) * parseFloat((el.price))} /> */}
          </h1>
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  groceries: makeSelectGroceries(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(GroceryPage);
