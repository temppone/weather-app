import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};

    &:focus-within {
      background-color: ${theme.colors.boxBg};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;
    font-size: 2rem;
    border: none;
    outline: none;
    background: transparent;
    color: #000;
    border-radius: ${theme.border.radius};

    ::placeholder {
      color: ${theme.colors.secondaryText};
    }
  `}
`;

export const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.5rem;
    color: ${theme.colors.secondaryText};

    & > svg {
      width: 100%;
    }
  `}
`;
