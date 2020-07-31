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
import '../../src/styles/css/index.css';

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
      href="https://api.whatsapp.com/send?phone=573016492993"
      class="float"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        class="my-float"
        icon={['fab', 'whatsapp']}
        style={{ color: '#FFF' }}
      />
    </FloatingButton>
  </Layout>
);

const FloatingButton = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 27px;
  right: 27px;
  background-color: ${props => props.theme.color.green.regular};
  border-radius: 50px;
  text-align: center;
  font-size: ${props => props.theme.font_size.small};
  box-shadow: 1px 0.5px 4px 1px #999;
  z-index: 100;
`;

export default IndexPage;
