import React from 'react';
import Navbar from '@components/Layouts/Navbar';
import Footer from '@components/Layouts/Footer';
import Banner from '@components/Blog/Banner';
import BlogOne from '@components/Blog/BlogOne';

const Blog = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BlogOne />
      <Footer />
    </>
  );
};

export default Blog;
