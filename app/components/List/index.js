import React from 'react';
import PropTypes from 'prop-types'

import Wrapper from './Wrapper';

export class List extends React.PureComponent {
  render() {
    return <Wrapper>{this.renderList()}</Wrapper>;
  }

  renderList = () => {
    const { data, Component } = this.props;
    if (!data) return '';
    return data.map(entry => <Component data={entry} />);
  };
}

List.propTypes = {
  data: PropTypes.object,
  Component: PropTypes.object,
};

export default List;
