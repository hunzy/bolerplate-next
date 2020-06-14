import React, { FC } from 'react';
import InputText from '@atoms/InputText';
import Button from '@atoms/Button';

interface Props {
  inputValue: string;
  changeInput: (value: string) => void;
  addTodo: () => void;
}

const InputArea: FC<Props> = ({ inputValue, changeInput, addTodo }) => {
  return (
    <>
      <InputText placeholder={'Input your todo'} value={inputValue} onChange={changeInput} />
      <Button onClick={addTodo} text={'追加'} />
    </>
  );
};

export default InputArea;
