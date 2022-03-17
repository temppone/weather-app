import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.main};
    font-size: 10rem;
  `}

  ::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.4rem solid ${({ theme }) => theme.colors.main};
    margin-top: 4rem;
    align-self: flex-start;
  }
`;
