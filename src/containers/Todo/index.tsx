import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoComponent from './Todo';
import { addTodo, deleteTodo } from '../../redux/modules/todo';
import { todoSelector } from '../../redux/selectors';

const Todo = () => {
  const dispatch = useDispatch();
  const todo = useSelector(todoSelector);
  const [input, setInput] = useState('');
  const handleAddTodo = async () => {
    const result = await dispatch(
      addTodo({
        text: input,
        completed: false,
      }),
    );
    if (addTodo.fulfilled.match(result)) {
      setInput('');
    }
  };
  const handleDeleteTodo = async (id: number) => {
    await dispatch(deleteTodo(id));
  };

  return (
    <TodoComponent
      todo={todo}
      inputValue={input}
      changeInput={setInput}
      addTodo={handleAddTodo}
      deleteTodo={handleDeleteTodo}
    />
  );
};

export default Todo;
