/**
 * ConfirmationPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';

// import messages from './messages';

import Header from './Header';
import HeaderSub from './HeaderSub';
import Button from '../../components/LinkCTA/index';
import ButtonWrapper from './ButtonWrapper';

import IconWrapper from './IconWrapper';
import Wrapper from './Wrapper';


/* eslint-disable react/prefer-stateless-function */
export default class ConfirmationPage extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <IconWrapper>
          <i className="fal fa-gift fa-4x" />
        </IconWrapper>
        <Header>Thank you for donating!</Header>
        <HeaderSub>Your confirmation number is #151287662</HeaderSub>
        <ButtonWrapper>
          <Button to="/map">Find another pantry</Button>
        </ButtonWrapper>
      </Wrapper>
    );
  }
}
