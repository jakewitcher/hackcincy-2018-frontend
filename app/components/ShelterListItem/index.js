import React from 'react';
import StyledLink from '../StyledLink/index';

import ListItemHeader from './ListItemHeader';
import ListItemHeaderSub from './ListItemHeaderSub';
import ListItemInfo from './ListItemInfo';
import ListItemMetric from './ListItemMetric';
import Wrapper from './Wrapper';

export class ShelterListItem extends React.PureComponent {
  render() {
    // console.log("this.props.data: ", this.props.data); //  eslint-disable-line no-console
    return (
      <StyledLink to="/grocery" onClick={() => this.props.onClick(this.props.data)}>
        <Wrapper
          key={this.props.data.lat + this.props.data.lng}
          onMouseEnter={() => this.props.focusMarker(this.props.data.lat)}
          onMouseLeave={() => this.props.resetMarker(this.props.data.lat)}
        >

          <ListItemInfo>
            <ListItemHeader>{this.props.data.name}</ListItemHeader>
            <ListItemHeaderSub>
              {this.props.data.formatted_address}
            </ListItemHeaderSub>
          </ListItemInfo>
          <ListItemMetric>
            {this.props.data.distance ? this.props.data.distance : 0.3}
          </ListItemMetric>

        </Wrapper>
      </StyledLink>
    );
  }
}

export default ShelterListItem;
