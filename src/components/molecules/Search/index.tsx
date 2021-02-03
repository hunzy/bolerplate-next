import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '@atoms/Button';
import { InputText } from '@atoms/InputText';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export const Search: FC<Props> = ({ value, onChange, onSubmit }) => {
  return (
    <div>
      <StyledInputText placeholder={'キーワード'} value={value} onChange={onChange} />
      <Button text={'送信'} onClick={onSubmit} />
    </div>
  );
};

const StyledInputText = styled(InputText)`
  margin-right: 8px;
`;
