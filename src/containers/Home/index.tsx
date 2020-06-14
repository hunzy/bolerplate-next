import React from 'react';
import HomeComponent from './Home';

const Home = () => {
  const handleSubmit = () => console.log('hello');
  return <HomeComponent submit={handleSubmit} />;
};

export default Home;
