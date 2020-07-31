import React from 'react';
import { Link } from 'gatsby';
import '../styles/css/404.css';
import Layout from '@common/Layout';
import { Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1 className="title">ERROR</h1>
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <p className="zoom-area">PAGINA NO ENCONTRADA.</p>
      <div className="link-container">
        <Link to="/" className="more-link">
          Volver al sitio: click aquí
        </Link>
      </div>
    </Container>
  </Layout>
);

export default NotFoundPage;
