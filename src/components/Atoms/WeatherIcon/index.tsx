import React from 'react';
import useImageOnLoad from './../../../hooks/useImageOnload';
import * as S from './styles';

export interface LogoProps {
  hideText?: boolean;
  svg?: string;
}

const WeatherIcon = ({ svg }: LogoProps) => {
  const { handleImageOnLoad, css } = useImageOnLoad();

  return (
    <S.Container>
      <S.Img
        onLoad={handleImageOnLoad}
        src={svg}
        alt="Weather icon"
        style={css.fullSize}
      />
    </S.Container>
  );
};

export default WeatherIcon;
