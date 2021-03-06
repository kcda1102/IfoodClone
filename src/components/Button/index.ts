import styled, { css } from "styled-components";

interface ButtonProps {
  color?: string;
  background?: string;
  height?: string;
  width?: string;
  hover?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: 16px;
  flex-grow: 1;
  text-align: center;
  font-weight: 700;
  line-height: 1em;
  border-radius: 0.375rem;
  padding: 0;
  border: 0;
  outline: 0;
  margin: 0.1875rem 0 0.1875rem 1.25rem;
  color: ${({color}) => color ? color :  "#fff"};
  background: ${({background}) => background ? background :  "#fff"};
  height: ${({height}) => height ? `${height}px` :  "100%"};
  width: ${({width}) => width ? `${width}px` :  "6.5rem"};
  cursor: pointer;

  ${props => props.hover && css`
    :hover {
      filter: brightness(0.9);
    }
  `}
`;