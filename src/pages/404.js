import React from 'react';
import styled from 'styled-components';

import '@styles/css/404.css';
import Layout from '@common/Layout';
import { Container } from '@components/global';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout className="layout">
    <Container className="container">
      <Title>ERROR</Title>
      <ErrorContainer>
        <span>4</span>
        <span>
          <ScreenReaderText>0</ScreenReaderText>
        </span>
        <span>4</span>
      </ErrorContainer>
      <ZoomArea>PAGINA NO ENCONTRADA.</ZoomArea>
      <LinkContainer>
        <Link to="/">
          <MoreLink>Volver al sitio: click aquí</MoreLink>
        </Link>
      </LinkContainer>
    </Container>
  </Layout>
);

const Title = styled.h1`
  text-align: center;
  margin: 37px 0 0 0;
  font-weight: 900;
`;

const ErrorContainer = styled.section`
  text-align: center;
  font-size: 180px;
  font-family: 'Catamaran', sans-serif;
  font-weight: 800;
  margin: 20px 15px;

  > span {
    display: inline-block;
    line-height: 0.7;
    position: relative;
    color: #ffb485;
  }

  > span {
    display: inline-block;
    position: relative;
    vertical-align: middle;
  }

  > span:nth-of-type(1) {
    color: #d1f2a5;
    animation: colordancing 4s infinite;
  }

  > span:nth-of-type(3) {
    color: #f56991;
    animation: colordancing2 4s infinite;
  }

  > span:nth-of-type(2) {
    width: 120px;
    height: 120px;
    border-radius: 999px;
  }

  > span:nth-of-type(2):before,
  > span:nth-of-type(2):after {
    border-radius: 0%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 999px;
    box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
      inset 0 30px 0 rgba(239, 250, 180, 0.4),
      inset -30px 0 0 rgba(255, 196, 140, 0.4),
      inset 0 -30px 0 rgba(245, 105, 145, 0.4);
    animation: shadowsdancing 4s infinite;
  }

  > span:nth-of-type(2):before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const ScreenReaderText = styled.span`
  position: absolute;
  top: -9999em;
  left: -9999em;
`;

const ZoomArea = styled.p`
  max-width: 490px;
  margin: 30px auto 30px;
  font-size: 27px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.color.red.regular};
`;

const LinkContainer = styled.div`
  text-align: center;
`;

const MoreLink = styled.a`
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 500;
  background-color: ${(props) => props.theme.color.red.dark};
  padding: 10px 15px;
  border-radius: 0;
  color: ${(props) => props.theme.color.white.regular};
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  line-height: 1.5;
  text-decoration: none;
  margin-top: 50px;
  letter-spacing: 1px;
`;
export default NotFoundPage;
