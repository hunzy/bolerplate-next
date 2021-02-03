import React, { useState } from 'react';
import { HomeComponent } from './Home';

export const Home = () => {
  const [keyword, setKeyword] = useState('');
  const handleSubmit = () => console.log(keyword);
  const handleChangeKeyword = (value: string) => setKeyword(value);

  return <HomeComponent keyword={keyword} onChangeKeyword={handleChangeKeyword} onSubmit={handleSubmit} />;
};
