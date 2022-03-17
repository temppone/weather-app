import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: ${theme.font.weight.large};
    color: ${theme.colors.main};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;
