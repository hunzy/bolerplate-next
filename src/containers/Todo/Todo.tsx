import React, { FC } from 'react';
import InputText from '@atoms/InputText';
import Button from '@atoms/Button';
import { TodoState } from 'redux/modules/todo';

interface Props {
  todo: TodoState;
  inputValue: string;
  changeInput: (value: string) => void;
  addTodo: () => void;
}

const TodoComponent: FC<Props> = ({ todo, inputValue, changeInput, addTodo }) => {
  const todoList = todo.map((t) => <li key={t.id}>{t.text}</li>);

  return (
    <>
      <InputText placeholder={'Input your todo'} value={inputValue} onChange={changeInput} />
      <Button onClick={addTodo} text={'追加'} />
      <ul>{todoList}</ul>
    </>
  );
};

export default TodoComponent;
