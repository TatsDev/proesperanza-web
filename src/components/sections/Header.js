import React from 'react';
import styled from 'styled-components';
import Pulse from 'react-reveal/Pulse';

import { Container } from '@components/global';
import Prices from '@single/Prices';
import Slides from '@single/Slides';

// import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <HeaderWrapper>
    <Title>
      <Pulse>
        <h1>Cómodos apartamentos de 2 y 3 alcobas.</h1>
        <h3>Barrio Los Almendros, Soledad</h3>
      </Pulse>
    </Title>
    <Container>
      <Grid>
        <Art>
          <Slides />
          {/* <Img fluid={data.banner_family.childImageSharp.fluid} /> */}
        </Art>
        <Prices />
      </Grid>
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.color.primary};
  padding: 4.7rem 0 3.7rem 0;
  margin: 0 0 2rem 0;
  ${'' /* background-color: blue; */}

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Title = styled.div`
  padding: 7px 0 0 0;
  text-align: center;
  color: ${(props) => props.theme.color.white.regular};
  background-color: ${(props) => props.theme.color.green.dark};

  @media (max-width: ${(props) => props.theme.screen.md}) {
    text-align: center;
    font-size: 27%;
  }
`;

const Art = styled.figure`
  width: 100%;
  align-self: center;

  > div {
    width: 114%;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  grid-gap: 87px;
  ${'' /* background-color: green; */}

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 37px;

    > ${Art} {
      order: 2;
    }
  }
`;

// const StyledExternalLink = styled(ExternalLink)`
//   color: inherit;
//   text-decoration: none;

//   &:hover {
//     color: ${props => props.theme.color.black.regular};
//   }
// `;

export default Header;
