import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '@atoms/Button';
import InputText from '@atoms/InputText';

interface Props {
  onSubmit: () => void;
}

const Search: FC<Props> = ({ onSubmit }) => {
  return (
    <div>
      <StyledInputText placeholder={'キーワード'} />
      <Button text={'送信'} onClick={onSubmit} />
    </div>
  );
};

const StyledInputText = styled(InputText)`
  margin-right: 8px;
`;

export default Search;
