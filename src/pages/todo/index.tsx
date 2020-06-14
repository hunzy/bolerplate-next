import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Todo from 'containers/Todo';
import { fetchTodo } from 'redux/modules/todo';
import { useDispatch } from 'react-redux';

const Page: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  return <Todo />;
};

export default Page;
