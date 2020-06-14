import React from 'react';
import { AppProps } from 'next/app';
import styled from 'styled-components';
import 'ress';
import Header from '@organisms/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 960px;
`;

export default MyApp;
