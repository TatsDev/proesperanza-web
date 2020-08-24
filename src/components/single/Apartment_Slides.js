import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { StaticQuery, graphql } from 'gatsby';

import '@styles/css/background-image.css';

const width = '730px',
  height = '430px';
const Container = styled.div`
  border: 1px solid ${(props) => props.theme.color.transparent_shadow};
  border-radius: 4px;
  box-shadow: 0px 0px 5px ${(props) => props.theme.color.red.dark};
  position: relative;
  overflow: hidden;
  width: ${width};
  display: flex;
  flex-direction: column;
`;
const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const Arrow = styled.div`
  text-shadow: 2px 2px 2px ${(props) => props.theme.color.white.dark};
  color: transparent;
  filter: drop-shadow(0.03em 0.07em ${(props) => props.theme.color.red.dark});
  ${'' /* mix-blend-mode: difference; */}
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 4rem;
  cursor: pointer;
  user-select: none;
  ${(props) =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`;
const Dot = styled.span`
  font-size: 2.3em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>
        {'<'}
      </Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>
        {'>'}
      </Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map((_val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ '}
        </Dot>
      ))}
    </Dots>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

const Slides = () => (
  <StaticQuery
    query={graphql`
      query {
        apt_slide1: file(
          sourceInstanceName: { eq: "apartment" }
          name: { eq: "apt_type1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        apt_slide2: file(
          sourceInstanceName: { eq: "apartment" }
          name: { eq: "apt_type2" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        apt_slide3: file(
          sourceInstanceName: { eq: "apartment" }
          name: { eq: "apt_type3" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        apt_slide4: file(
          sourceInstanceName: { eq: "apartment" }
          name: { eq: "apt_type4" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => (
      <Carousel maxTurns={0}>
        <Slide right>
          <div>
            <BackgroundImage
              className="apartment-img"
              fluid={data.apt_slide1.childImageSharp.fluid}
            ></BackgroundImage>
          </div>
        </Slide>
        <Slide right>
          <div>
            <BackgroundImage
              className="apartment-img2"
              fluid={data.apt_slide2.childImageSharp.fluid}
            ></BackgroundImage>
          </div>
        </Slide>
        <Slide right>
          <div>
            <BackgroundImage
              className="apartment-img3"
              fluid={data.apt_slide3.childImageSharp.fluid}
            ></BackgroundImage>
          </div>
        </Slide>
        <Slide right>
          <div>
            <BackgroundImage
              className="apartment-img4"
              fluid={data.apt_slide4.childImageSharp.fluid}
            ></BackgroundImage>
          </div>
        </Slide>
      </Carousel>
    )}
  />
);

export default Slides;
