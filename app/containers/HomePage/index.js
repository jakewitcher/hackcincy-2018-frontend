/* HomePage
*
* This is the first thing users see of our App, at the '/' route
/*
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import LinkCTA from 'components/LinkCTA';

import HeroImageSrc from 'assets/images/autumn-hero.jpg';

import CTAButtonContainer from './CTAButtonContainer';
import CTAContainer from './CTAContainer';
import Divider from './Divider';
import HeroImage from './HeroImage';
import HeroImageContainer from './HeroImageContainer';
import HeroHeader from './HeroHeader';
import PageWrapper from './PageWrapper';
import SecondaryLink from './SecondaryLink';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <PageWrapper>
        <HeroImageContainer src={HeroImage}>
          <HeroImage src={HeroImageSrc} alt="hero autumn" />
        </HeroImageContainer>
        <CTAContainer>
          <HeroHeader>Feed your community.</HeroHeader>
          <CTAButtonContainer>
            <Divider />
            <LinkCTA to="/map">Find a shelter</LinkCTA>
            <SecondaryLink>I'm a shelter that needs help!</SecondaryLink>
            {/* <Divider /> */}
            {/* <LinkCTA /> */}
          </CTAButtonContainer>
        </CTAContainer>
      </PageWrapper>
    );
  }
}
