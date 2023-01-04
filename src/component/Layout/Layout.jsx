import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import '../../style/_layout.scss';

function Layout() {
  return (
    <div className='box'>
      <Header />
      <NavBar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}

export default Layout