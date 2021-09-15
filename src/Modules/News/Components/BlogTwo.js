import React from 'react';
import Navbar from '@components/Layouts/Navbar';
import Footer from '@components/Layouts/Footer';
import Banner from '@components/Blog/Banner';
import BlogTwo from '@components/Blog/BlogTwo';

const Blog = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BlogTwo />
      <Footer />
    </>
  );
};

export default Blog;
