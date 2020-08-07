import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        banner_build: file(
          sourceInstanceName: { eq: "banner" }
          name: { eq: "family" }
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
      <Section id="información">
        <Container>
          <Title>
            <h2>18 CÓMODOS APARTAMENTOS DE 2 Y 3 ALCOBAS</h2>
            <h3>
              55,72 m<sup>2</sup> / 51,88 m<sup>2</sup>
            </h3>
            <h3>Ubicado en la Calle 82 entre Carreras 18A y 18B</h3>
          </Title>

          <Content>
            <ContentCircle>
              <p>
                10 apartamentos <br></br>de 55,72 m<sup>2</sup>.
              </p>
              <ul>
                <li>3 Alcobas</li>
                <li>2 Baños</li>
                <li>Sala - Comedor</li>
                <li>Cocina y labores</li>
              </ul>
            </ContentCircle>
            <ContentCircle>
              <p>
                8 apartamentos <br></br>de 51,88 m<sup>2</sup>
              </p>
              <ul>
                <li>2 Alcobas</li>
                <li>1 Estudio</li>
                <li>1 Baños</li>
                <li>Sala - Comedor</li>
                <li>Cocina y labores</li>
                <li>Mirador</li>
              </ul>
            </ContentCircle>
          </Content>

          {/* <Grid inverse>
        <Art>
          <Img fluid={data.art_learn.childImageSharp.fluid} />
        </Art>
        <div>
          <h2>Nothing new to learn here</h2>
          <p>
            Enjoy the power of the latest web technologies – React.js , Webpack
            , modern JavaScript and CSS and more — all set up and waiting for
            you to start building.
          </p>
        </div>
      </Grid>
      <Grid>
        <div>
          <h2>Grow and build your ideas</h2>
          <p>
            Waste no more time on tooling and performance. Focus on the the site
            you want to build and nothing more.
            <br />
            <br />
            Gatsby is fast in every way that matters.
          </p>
        </div>
        <Art>
          <Img fluid={data.art_ideas.childImageSharp.fluid} />
        </Art>
      </Grid> */}
        </Container>
      </Section>
    )}
  />
);

const Title = styled.div`
  text-align: center;
  ${'' /* color: ${props => props.theme.color.black.regular} */}
  ${'' /* display: flex;
  justify-content: center; */};
`;

const Content = styled.div`
  margin-top: 3rem;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
`;

const ContentCircle = styled.div`
  border: 1px solid ${props => props.theme.color.orange.regular};
  height: 19rem;
  border-radius: 50%;
  padding: 3rem;
  background-color: ${props => props.theme.color.orange.light};

  > p,
  ul li {
    color: ${props => props.theme.color.black.regular};
    font-size: ${props => props.theme.font_size.xsmall};
  }
`;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 3fr 2fr;
//   grid-gap: 40px;
//   text-align: right;
//   align-items: center;
//   justify-items: center;
//   margin: 7px 0;

//   ${props =>
//     props.inverse &&
//     `
//     text-align: left;
//     grid-template-columns: 2fr 3fr;
//   `}

//   h2 {
//     margin-bottom: 16px;
//   }

//   @media (max-width: ${props => props.theme.screen.md}) {
//     grid-template-columns: 1fr;
//     text-align: left;
//     margin-bottom: 96px;

//     &:last-child {
//       margin-bottom: 24px;
//     }
//   }
// `;

// const Art = styled.figure`
//   margin: 0;
//   max-width: 380px;
//   width: 100%;
// `;

export default About;
