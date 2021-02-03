import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  text: string;
  onClick: () => void;
}

export const Button: FC<Props> = ({ className, text, onClick }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 8px;
  border: 1px solid #333;
  border-radius: 8px;
`;
