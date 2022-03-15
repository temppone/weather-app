import React from "react";
import * as S from "./styles";

interface TitleProps {
  value: string;
}

const Title = ({ value }: TitleProps) => {
  return (
    <S.Container>
      <S.Label>{value}</S.Label>
      <S.SubLabel>{value}</S.SubLabel>
    </S.Container>
  );
};

export default Title;
