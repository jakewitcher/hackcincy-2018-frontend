import React from 'react';

import GroceryListInfo from './GroceryListInfo';
import Layout from './Layout';

export class GroceryItem extends React.PureComponent {
  render() {
    console.log(this.props);
    return ( 
      <Layout>
        <img src={this.props.img}/>
        <div>
          <GroceryListInfo>{this.props.name}</GroceryListInfo>
          <GroceryListInfo>{this.props.price}</GroceryListInfo>
          Quantity: <input type="number" id="qty" name="qty" min="0" max="25" placeholder="0"></input>
          <GroceryListInfo>Quantity: {this.props.qty}</GroceryListInfo>
        </div>
      </Layout>
    )
  }
}

export default GroceryItem;
