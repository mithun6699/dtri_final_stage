import React from 'react';

import BlogPage from './BlogPage';
import MainPage from './MainPage';
import AboutPage from './AboutPage'
import ResearchPage from './ResearchPage';
import ContactPage from './ContactPage';

function Home() {
  return (
    <>
      <MainPage />
      <AboutPage/>
      <ResearchPage/>
      <BlogPage />
      <ContactPage />
    </>
  );
}

export default Home;
