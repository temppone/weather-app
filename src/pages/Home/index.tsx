import { Search } from '@styled-icons/material-outlined';
import React from 'react';
import cloudy from '../../assets/icons/cloudy.svg';
import Input from '../../components/Atoms/Input';
import WeatherIcon from '../../components/Atoms/WeatherIcon';
import * as S from './styles';
import CityTitle from './../../components/Atoms/CityTitle';
import Temperature from '../../components/Atoms/Temperature';
import GroupInfos from './../../components/Molecules/GroupInfos/index';

const Home = () => {
  return (
    <S.Container>
      <Input placeholder="Search Location" icon={<Search />} />
      <WeatherIcon svg={cloudy} />
      <CityTitle text="São Paulo" />
      <Temperature value={31} />
      <GroupInfos />
    </S.Container>
  );
};

export default Home;
