import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from '../component/Layout/Layout';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import Container from '../component/Container/Container';

function Base() {
  return (
    <>
      <Layout>
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </Layout>
    </>
  )
}

export default Base