import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import Search from '@molecules/Search';

const Home: NextPage = () => {
  const handleClick = () => console.log('hello');
  return (
    <>
      <Image src="/zeit.svg" alt="" />
      <Title>boilerplate-next</Title>
      <Search value={'sample'} onChange={() => console.log('sample')} onSubmit={handleClick} />
    </>
  );
};

const Image = styled.img`
  width: 200px;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 40px;
`;

export default Home;
