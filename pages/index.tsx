import React from 'react';
import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string }> = (props) => <h1>Hello world! - user agent: {props.userAgent}</h1>;

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
