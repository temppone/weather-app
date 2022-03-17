import React from 'react';
import WeatherInfo from './../../Atoms/WeatherInfo/index';
import * as S from './styles';

const GroupInfos = () => {
  return (
    <S.Container>
      <WeatherInfo label="time" value="11:25 AM" />
      <WeatherInfo label="UV" value="4" />
      <WeatherInfo label="% rain" value="58%" />
      <WeatherInfo label="AQ" value="22" />
    </S.Container>
  );
};

export default GroupInfos;
