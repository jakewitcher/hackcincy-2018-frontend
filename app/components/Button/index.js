import React from 'react';

import Wrapper from './Wrapper';

export function Button(props) {
  return (
    <Wrapper {...props}>
      {props.children ? props.children : 'Button Text'}
    </Wrapper>
  );
}

export default Button;
