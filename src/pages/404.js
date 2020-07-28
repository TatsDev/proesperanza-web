import React from 'react';
import { Link } from 'gatsby';
import '../styles/css/404.css';
import Layout from '@common/Layout';
import { Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1 class="title">ERROR</h1>
      <p class="zoom-area">PAGINA NO ENCONTRADA.</p>
      <section class="error-container">
        <span>4</span>
        <span>
          <span class="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div class="link-container">
        <Link to="/" class="more-link">
          Volver al sitio: click aquí
        </Link>
      </div>
    </Container>
  </Layout>
);

export default NotFoundPage;
