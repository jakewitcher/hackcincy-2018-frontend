import React from 'react';

import { ImageContainer } from './GroceryListImage';
import { ImageStyles } from './GroceryListImage';
import GroceryListInfo from './GroceryListInfo';
import NumericInput from 'react-numeric-input';
import Flexbox from './Flexbox';

export class GroceryItem extends React.PureComponent {
  render() {
    return ( 
      <Flexbox>
        <ImageContainer>
          <ImageStyles src={this.props.img}></ImageStyles>
        </ImageContainer>
        <div>
          <GroceryListInfo>{this.props.name}</GroceryListInfo>
          <GroceryListInfo>{new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(this.props.price)}</GroceryListInfo>
          <GroceryListInfo>
            Quantity: <NumericInput min={0} max={100} value={this.props.qty} style={{
              input: {
                width: '65px'
              }
            }}/>
          </GroceryListInfo>
          <GroceryListInfo>{new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(this.props.total)}</GroceryListInfo>
        </div>
      </Flexbox>
    )
  }
}

export default GroceryItem;
