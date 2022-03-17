import React from 'react';
import * as S from './styles';

interface WeatherInfoProps {
  label: string;
  value: string;
}

const WeatherInfo = ({ label, value }: WeatherInfoProps) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Value>{value}</S.Value>
    </S.Container>
  );
};

export default WeatherInfo;
