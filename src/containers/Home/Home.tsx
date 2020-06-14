import React, { FC } from 'react';
import Search from '@molecules/Search';
import styled from 'styled-components';

interface Props {
  submit: () => void;
}

const HomeComponent: FC<Props> = ({ submit }) => {
  return (
    <>
      <Image src="/zeit.svg" alt="" />
      <Title>boilerplate-next</Title>
      <Search value={'sample'} onChange={() => console.log('sample')} onSubmit={submit} />
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

export default HomeComponent;
