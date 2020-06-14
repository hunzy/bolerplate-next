import React, { useState } from 'react';
import { NextPage } from 'next';
import Button from '@atoms/Button';
import InputText from '@atoms/InputText';
import { useDispatch, useSelector } from 'react-redux';
import { todoSelector } from 'redux/selectors';
import { addTodo } from 'redux/modules/todo';

const Page: NextPage = () => {
  const dispatch = useDispatch();
  const todo = useSelector(todoSelector);
  const [input, setInput] = useState('');
  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput('');
  };
  const todoList = todo.map((t) => <p key={t.id}>{t.text}</p>);
  return (
    <>
      <InputText placeholder={'Input your todo'} value={input} onChange={setInput} />
      <Button onClick={handleAddTodo} text={'追加'} />
      {todoList}
    </>
  );
};

export default Page;
