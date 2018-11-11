import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectGroceries } from 'containers/App/selectors';
import LinkCTA from 'components/LinkCTA';
import GroceryListItem from 'components/GroceryListItem';
import Panel from './Panel';
import Layout from './Layout';
import Wrapper from './Wrapper';
import { ImageContainer } from './Logo';
import { Kroger } from './Logo';
import { Clicklist } from './Logo';
import { SVG } from './Logo';
import { Back } from './Logo';

export class GroceryPage extends React.PureComponent {
  state = {'allTotals': 0};

  changeItemTotal = (itemTotal) => {
    console.log(itemTotal);
    this.setState({
      'allTotals': itemTotal + this.state.allTotals
    })
  }

  render() {
    return (
      <Wrapper>
        <ImageContainer>
          <a href="/map">
            <SVG src="http://cdn.onlinewebfonts.com/svg/img_170454.png"></SVG>
            <Back>Back to Map</Back>
          </a>
          <Kroger src="https://s3.amazonaws.com/freebiesupply/large/2x/kroger-logo-png-transparent.png"></Kroger>
          <Clicklist src="https://www.kroger.com/asset/retina-store-logo"></Clicklist>
        </ImageContainer>
        <Layout>
          {this.props.groceries.map((el, i) => (
            <GroceryListItem key={i} name={el.name} price={el.price} img={el.image} qty={el.quantity} onChange={this.changeItemTotal} />
          ))}
        </Layout>

        <Panel>
          <h1>
            <span style={{ fontSize: '16px', color: '#585858' }}>
            TOTAL:</span> {new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(this.state.allTotals)}</h1>
          <LinkCTA to="/confirmation">Finish and Pay</LinkCTA>
        </Panel>
      </Wrapper>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  groceries: makeSelectGroceries(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(GroceryPage);
