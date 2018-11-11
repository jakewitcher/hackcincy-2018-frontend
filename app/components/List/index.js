import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

export class List extends React.PureComponent {
  render() {
    return <Wrapper>{this.renderList()}</Wrapper>;
  }

  renderList = () => {
    const { data, Component, focusMarker, resetMarker } = this.props;
    if (!data) return '';
    return data.map(entry => (
      <Component
        data={entry}
        focusMarker={focusMarker}
        resetMarker={resetMarker}
        key={entry.lat + entry.lng}
      />
    ));
  };
}

List.propTypes = {
  data: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  Component: PropTypes.func.isRequired,
};

export default List;
