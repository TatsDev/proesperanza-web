import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import '@styles/css/header.css';

import { Container } from '@components/global';
// import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Title>
            <h2>Cómodos apartamentos de 2 y 3 alcobas.</h2>
            <h3>Barrio Los Almendros, Soledad</h3>
          </Title>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Form>
              <h3 class="form-title">COTIZACIÓN</h3>
            </Form>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 87px;
  background-color: blue;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Title = styled.div`
  text-align: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    text-align: center;
    font-size: 27%;
  }
`;

const Art = styled.figure`
  width: 100%;
  align-self: center;

  > div {
    width: 114%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  grid-gap: 17px;
  background-color: green;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 37px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Form = styled.div`
  margin-top: 7px;
  align-self: start;
  background-color: white;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
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
