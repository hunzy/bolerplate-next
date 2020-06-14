import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoComponent from './Todo';
import { addTodo, saveTodo } from '../../redux/modules/todo';
import { todoSelector } from '../../redux/selectors';

const Todo = () => {
  const dispatch = useDispatch();
  const todo = useSelector(todoSelector);
  const [input, setInput] = useState('');
  const handleAddTodo = async () => {
    const result = await dispatch(
      saveTodo({
        text: input,
        completed: false,
      }),
    );
    if (saveTodo.fulfilled.match(result)) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return <TodoComponent todo={todo} inputValue={input} changeInput={setInput} addTodo={handleAddTodo} />;
};

export default Todo;
