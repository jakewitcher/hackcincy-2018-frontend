import React from 'react';

import ListItemHeader from './ListItemHeader';
import ListItemInfo from './ListItemInfo';
import ListItemMetric from './ListItemMetric';
import Wrapper from './Wrapper';

export class ShelterListItem extends React.PureComponent {
  render() {
    console.log("this.props.data: ", this.props.data); //  eslint-disable-line no-console
    return (
      <Wrapper key={this.props.data.id}>
        <ListItemInfo>
          <ListItemHeader>{this.props.data.name}</ListItemHeader>
        </ListItemInfo>
        <ListItemMetric>{this.props.data.distance}</ListItemMetric>
      </Wrapper>
    );
  }
}

export default ShelterListItem;
