import React from 'react';
import Input from '../../components/Atoms/Input';
import { Search } from '@styled-icons/material-outlined';

const Home = () => {
  return (
    <div>
      <Input placeholder="Cidade" icon={<Search />} />
    </div>
  );
};

export default Home;
