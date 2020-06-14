import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todo';
import TodoInputComponent from './TodoInput';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput('');
  };

  return <TodoInputComponent inputValue={input} changeInput={setInput} addTodo={handleAddTodo} />;
};

export default TodoInput;
