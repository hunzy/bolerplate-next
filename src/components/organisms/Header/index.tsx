import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const links: { href: string; text: string }[] = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/todo', text: 'Todo' },
];

export const Header: FC = () => {
  return (
    <Wrapper>
      <Link href={'/'}>
        <Logo src="/zeit.svg" alt="" />
      </Link>
      <LinkList>
        {links.map(({ href, text }, index) => (
          <LinkItem key={index}>
            <Link href={href}>
              <Anchor>{text}</Anchor>
            </Link>
          </LinkItem>
        ))}
      </LinkList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  box-shadow: 0 4px 8px 0 #ccc;
  margin-bottom: 32px;
  align-items: center;
`;

const Logo = styled.img`
  display: inline-block;
  height: 25px;
  cursor: pointer;
`;

const LinkList = styled.div`
  display: flex;
  margin-left: auto;
`;

const LinkItem = styled.div`
  margin-left: 32px;
`;

const Anchor = styled.a`
  color: #333;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
