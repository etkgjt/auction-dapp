import React, { Component } from 'react';
import Navbar from '@components/Layouts/Navbar';
import Footer from '@components/Layouts/Footer';
import Banner from '@components/ContactUs/Banner';
import Content from '@components/ContactUs/Content';

export const Contact = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </>
  );
};

export default Contact;
