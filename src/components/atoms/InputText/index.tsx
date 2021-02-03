import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
}

export const InputText: FC<Props> = ({ className, placeholder, value, onChange }) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return <StyledInput className={className} placeholder={placeholder} value={value} onChange={handleOnChange} />;
};

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #333;
  border-radius: 4px;
`;
