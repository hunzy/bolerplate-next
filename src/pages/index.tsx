import styled from 'styled-components';
import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => (
  <>
    <Image src="/zeit.svg" alt="" />
    <Title>boilerplate-next</Title>

    <LinkList>
      <LinkItem>
        <Link href="/about">
          <a>Go To About Page</a>
        </Link>
      </LinkItem>
      <LinkItem>
        <Link href="/todo">
          <a>Go To Todo Page</a>
        </Link>
      </LinkItem>
    </LinkList>
  </>
);

const Image = styled.img`
  width: 200px;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 40px;
`;

const LinkList = styled.ul`
  list-style: none;
`;

const LinkItem = styled.li`
  margin-bottom: 20px;
`;

export default Home;
