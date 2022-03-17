import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondaryText};
    margin-bottom: ${theme.spacings.xxsmall};
    text-transform: uppercase;
  `}
`;

export const Value = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.text};
  `}
`;
