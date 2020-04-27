import { AppProps } from 'next/app';
import styled from 'styled-components';
import 'ress';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 150px 0;
`;

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 960px;
`;

export default MyApp;
