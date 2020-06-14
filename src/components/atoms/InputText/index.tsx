import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  placeholder?: string;
}

const InputText: FC<Props> = ({ className, placeholder }) => {
  return <StyledInput className={className} placeholder={placeholder} />;
};

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #333;
  border-radius: 4px;
`;

export default InputText;
