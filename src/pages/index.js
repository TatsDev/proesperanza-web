import React from 'react';
import styled from 'styled-components';
import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
// import Brands from '@sections/Brands';
// import Team from '@sections/Team';
// import Faq from '@sections/Faq';
// import Footer from '@sections/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab);

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    {/* <Brands />
    <Team />
    <Faq />
    <Footer /> */}
    <FloatingButton
      href="https://api.whatsapp.com/send?phone=573007861667"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        icon={['fab', 'whatsapp']}
        style={{
          color: '#FFF',
          margin: '0.4rem 0.4rem 0 0.4rem',
          fontSize: '2.8rem',
        }}
      />
    </FloatingButton>
  </Layout>
);

const FloatingButton = styled.a`
  position: fixed;
  width: 59px;
  height: 59px;
  bottom: 27px;
  right: 27px;
  background-color: ${props => props.theme.color.green.regular};
  border-radius: 50px;
  text-align: center;
  font-size: ${props => props.theme.font_size.small};
  box-shadow: 0px -0.1px 3px 1.7px #999;
  z-index: 100;
`;

export default IndexPage;
