import React from 'react';

import Wrapper from './Wrapper';

export class ShelterListItem extends React.PureComponent {
  render() {
    console.log("this.props.data: ", this.props.data); //  eslint-disable-line no-console
    return <Wrapper>{this.props.data.id}</Wrapper>;
  }
}

export default ShelterListItem;
