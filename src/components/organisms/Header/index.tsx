import React, { FC } from 'react';
import styled from 'styled-components';

const Header: FC = () => {
  return (
    <Wrapper>
      <Logo src="/zeit.svg" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  box-shadow: 0 4px 8px 0 #ccc;
  margin-bottom: 32px;
`;

const Logo = styled.img`
  width: 100px;
`;

export default Header;
