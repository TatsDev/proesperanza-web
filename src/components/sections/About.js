import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Section, Container } from '@components/global';
import AptSlides from '@single/Apartment_Slides';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        space_dist: file(
          sourceInstanceName: { eq: "apartment" }
          name: { eq: "space_dist" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Section id="información">
        <Title>
          <Zoom top>
            <h2>18 APARTAMENTOS DE 2 Y 3 ALCOBAS</h2>
            <h3>
              55,72 m<sup>2</sup> / 51,88 m<sup>2</sup>
            </h3>
            <h3>Ubicado en la Calle 82 entre Carreras 18A y 18B</h3>
          </Zoom>
        </Title>
        <Container>
          <Art>
            <Img
              fluid={data.space_dist.childImageSharp.fluid}
              style={{ width: 1200, maxWidth: '100%' }}
            />
          </Art>
          <Content>
            <AptSlides />
            <Description>
              <div>
                <Zoom right>
                  <p>
                    10 apartamentos de<br></br>55,72 m<sup>2</sup> (Tipo 1 y 2)
                  </p>
                </Zoom>
                <Zoom right cascade>
                  <ul>
                    <li>3 Alcobas</li>
                    <li>2 Baños</li>
                    <li>Sala - Comedor</li>
                    <li>Cocina y labores</li>
                  </ul>
                </Zoom>
              </div>
              <div>
                <Zoom right>
                  <p>
                    8 apartamentos de<br></br>51,88 m<sup>2</sup> (Tipo 3 y 4)
                  </p>
                </Zoom>
                <Zoom right cascade>
                  <ul>
                    <li>2 Alcobas</li>
                    <li>1 Estudio</li>
                    <li>1 Baños</li>
                    <li>Sala - Comedor</li>
                    <li>Cocina y labores</li>
                    <li>Mirador</li>
                  </ul>
                </Zoom>
              </div>
            </Description>
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
  color: ${(props) => props.theme.color.white.regular};
  background-color: ${(props) => props.theme.color.green.dark};
  padding: 0.4rem 0 0 0;
  margin-botton: 0;
  ${'' /* margin-top: 2.7rem; */}
  ${'' /* display: flex;
  justify-content: center; */};

  @media (max-width: ${(props) => props.theme.screen.md}) {
    text-align: center;
    font-size: 27%;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: -7px 0 1rem 0;
`;

const Content = styled.div`
  margin: -1rem 0 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.color.aths_special};
`;

const Description = styled.div`
  padding: 3rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  ${'' /* background-color: lightgreen; */}

  > div > p, ul li {
    color: ${(props) => props.theme.color.black.regular};
    font-size: ${(props) => props.theme.font_size.xsmall};
  }
  > div > p {
    text-align: center;
    font-weight: bold;
  }
`;

const ContentCircle = styled.div`
  border: 1px solid ${(props) => props.theme.color.orange.regular};
  height: 19rem;
  border-radius: 50%;
  padding: 3rem;
  background-color: ${(props) => props.theme.color.orange.light};

  > p,
  ul li {
    color: ${(props) => props.theme.color.black.regular};
    font-size: ${(props) => props.theme.font_size.xsmall};
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
