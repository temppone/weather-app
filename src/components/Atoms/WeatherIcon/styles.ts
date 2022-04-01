import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { LogoProps } from './index';

const wrapperModifiers = {
  sm: () => css`
    width: 11rem;
    height: 11rem;
  `,

  md: () => css`
    width: 20rem;
    height: 20rem;
  `,

  lg: () => css`
    width: 30rem;
    height: 30rem;
  `,
};

export const Container = styled.div<LogoProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 12rem;
  margin: 4rem 0;

  ${media.greaterThan('medium')`
    ${wrapperModifiers.md()}
  `}

  ${media.greaterThan('large')`
    ${wrapperModifiers.lg()}
  `}
`;

export const Img = styled.img`
  width: 100%;
  position: 'absolute';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
