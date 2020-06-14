import React from 'react';
import { NextPage } from 'next';
import TodoList from 'containers/TodoList';
import TodoInput from 'containers/TodoInput';

const Page: NextPage = () => (
  <>
    <TodoInput />
    <TodoList />
  </>
);

export default Page;
