import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';

export default function Layout() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};