import React from 'react';
import * as S from './styles';

export interface LogoProps {
  hideText?: boolean;
  svg?: string;
}

const WeatherIcon = ({ svg }: LogoProps) => {
  return (
    <S.Container>
      <S.Img src={svg} alt="Weather icon" />
    </S.Container>
  );
};

export default WeatherIcon;
