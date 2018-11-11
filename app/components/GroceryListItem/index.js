import React from 'react';

import { ImageContainer } from './GroceryListImage';
import { ImageStyles } from './GroceryListImage';
import GroceryListInfo from './GroceryListInfo';
import GroceryListInput from './GroceryListInput'
import NumericInput from 'react-numeric-input';
import Flexbox from './Flexbox';

export class GroceryItem extends React.PureComponent {
  state = { 'total': 0 }

  changeTotal = (event, price) => {
    const newTotal = event.target.value * price;
    const currentTotal = this.state.total;
    let totalDifference = newTotal - currentTotal;
    //local state
    this.setState({ total: newTotal });
    //state we're passing to GroceryPage parent
    this.props.onChange(totalDifference);
  }

  render() {
    return ( 
      <Flexbox>
        <ImageContainer>
          <ImageStyles src={this.props.img}></ImageStyles>
        </ImageContainer>
        <div>
          <GroceryListInfo>{this.props.name}</GroceryListInfo>
          <GroceryListInfo>{new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(this.props.price)}</GroceryListInfo>
          <GroceryListInfo>Quantity Needed: {this.props.qty}</GroceryListInfo>
          <GroceryListInput type="number" placeholder="0" min="0" max="50" onChange={(event) => this.changeTotal(event, this.props.price)}></GroceryListInput>
        </div>
      </Flexbox>
    )
  }
}

export default GroceryItem;
