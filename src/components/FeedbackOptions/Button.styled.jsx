import styled from '@emotion/styled';
export const Button = styled.button`
  &:hover,
  &:focus {
    background-color: var(--button-color);
    border: 1px solid var(--button-border);
    border-radius: 2px;

    cursor: pointer;
  }
`;
