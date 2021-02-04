import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { Header } from '@organisms/Header';
import 'ress';
import { store } from 'redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 960px;
`;

export default MyApp;
