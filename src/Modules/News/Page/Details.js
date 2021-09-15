import React from 'react';
import Navbar from '@components/Layouts/Navbar';
import Footer from '@components/Layouts/Footer';
import BannerTwo from '@components/Blog/BannerTwo';
import DetailsContent from '@components/Blog/DetailsContent';

const BlogDetails = () => {
  return (
    <>
      <Navbar />
      <BannerTwo />
      <DetailsContent />
      <Footer />
    </>
  );
};

export default BlogDetails;
