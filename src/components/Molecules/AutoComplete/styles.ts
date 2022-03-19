import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    max-height: 50%;
    background-color: ${theme.colors.white};
    list-style: none;
  `}
`;

export const Item = styled.li`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.secondaryText};
    }
  `}
`;
