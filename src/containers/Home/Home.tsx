import React, { FC } from 'react';
import Search from '@molecules/Search';
import styled from 'styled-components';

interface Props {
  keyword: string;
  onChangeKeyword: (value: string) => void;
  onSubmit: () => void;
}

const HomeComponent: FC<Props> = ({ keyword, onChangeKeyword, onSubmit }) => {
  return (
    <>
      <Image src="/zeit.svg" alt="" />
      <Title>boilerplate-next</Title>
      <Search value={keyword} onChange={onChangeKeyword} onSubmit={onSubmit} />
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
