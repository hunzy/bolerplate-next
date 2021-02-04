import React, { FC } from 'react';
import { Button } from '@atoms/Button';
import { InputText } from '@atoms/InputText';
import { TodoState } from 'redux/modules/todo';

interface Props {
  todo: TodoState;
  changeInput: (value: string) => void;
  addTodo: () => void;
  deleteTodo: (id: number) => void;
}

export const TodoComponent: FC<Props> = ({ todo, changeInput, addTodo, deleteTodo }) => {
  const todoList = todo.todos.map((t) => (
    <li key={t.id}>
      {t.text}
      <span onClick={() => deleteTodo(t.id)}>[削除]</span>
    </li>
  ));

  return (
    <>
      <InputText placeholder={'Input your todo'} value={todo.input.value} onChange={changeInput} />
      <Button onClick={addTodo} text={'追加'} />
      <ul>{todoList}</ul>
    </>
  );
};
