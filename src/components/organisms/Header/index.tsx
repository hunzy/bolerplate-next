import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <Wrapper>
      <Logo src="/zeit.svg" alt="" />

      <LinkList>
        <LinkItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/about">
            <a>About</a>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/todo">
            <a>Todo</a>
          </Link>
        </LinkItem>
      </LinkList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  box-shadow: 0 4px 8px 0 #ccc;
  margin-bottom: 32px;
`;

const Logo = styled.img`
  display: inline-block;
  width: 100px;
`;

const LinkList = styled.div`
  display: flex;
  margin-left: auto;
`;

const LinkItem = styled.div`
  margin-left: 16px;
`;

export default Header;
