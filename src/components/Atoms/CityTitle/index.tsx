import React from 'react';
import * as S from './styles';

interface CityTitleProps {
  text: string;
}

const CityTitle = ({ text }: CityTitleProps) => {
  return <S.Container>{text}</S.Container>;
};

export default CityTitle;
