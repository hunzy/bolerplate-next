import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoSelector } from 'redux/selectors';
import { addTodo } from '../../redux/modules/todo';
import InputArea from './InputArea';
import TodoList from './TodoList';

const Todo = () => {
  const dispatch = useDispatch();
  const todo = useSelector(todoSelector);
  const [input, setInput] = useState('');
  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <>
      <InputArea inputValue={input} changeInput={setInput} addTodo={handleAddTodo} />
      <TodoList todo={todo} />
    </>
  );
};

export default Todo;
