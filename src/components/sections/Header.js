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
        banner_family: file(
          sourceInstanceName: { eq: "banner" }
          name: { eq: "family" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
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
              <Img fluid={data.banner_family.childImageSharp.fluid} />
            </Art>
            <Form>
              <h3 className="form-title">COTIZACIÓN</h3>
            </Form>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding: 5rem 0 2.7rem 0;
  margin-bottom: 5rem;
  ${'' /* background-color: blue; */}

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Title = styled.div`
  text-align: center;
  color: ${props => props.theme.color.red.regular};

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
  padding-top: 0.7rem;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  grid-gap: 97px;
  ${'' /* background-color: green; */}

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 37px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Form = styled.div`
  margin-top: 17px;
  align-self: start;
  border: 2px solid ${props => props.theme.color.red.light};
  border-radius: 5px;
  border-style: outset;
  ${'' /* background-color: white; */}

  > h3 {
    color: ${props => props.theme.color.red.dark};
  }

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
