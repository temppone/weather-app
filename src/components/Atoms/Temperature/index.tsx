import React from 'react';
import * as S from './styles';

interface TemperatureProps {
  value: number;
}

const Temperature = ({ value }: TemperatureProps) => {
  return <S.Container>{value}</S.Container>;
};

export default Temperature;
