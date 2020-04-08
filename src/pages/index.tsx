import styled from 'styled-components';
import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string }> = (props) => (
  <>
    <Title>Hello world!</Title>
    <UA>user agent: {props.userAgent}</UA>
  </>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

const Title = styled.h1`
  font-size: 36px;
`;

const UA = styled.p`
  color: red;
  font-size: 24px;
`;

export default Home;
