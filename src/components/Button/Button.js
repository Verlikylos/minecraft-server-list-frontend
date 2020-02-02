import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from 'gatsby';

import { colors } from '@utils';

import buttonBackground from '@images/minecraft/button.png';
import disabledButtonBackground from '@images/minecraft/button_diabled.png';

const StyledButton = styled(Link)`
  height: 40px;
  max-width: 400px;
  
  margin: .15em 0.15em;
  padding: 0 1em;

  background: #7a7a7a url('${buttonBackground}') no-repeat center center;
  background-size: auto 100%;
  
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;

  border: 2px solid #000000;
  outline: none;
  
  color: #ffffff;
  
  text-align: center;
  text-decoration: none;
  
  cursor: pointer;
  
  &:hover {
    border-color: #ffffff;
  }
  
  ${({ disabled }) =>
    disabled &&
    css`
     background: #7a7a7a url('${disabledButtonBackground}') no-repeat center center;
     background-size: auto 100%;
     image-rendering: pixelated;
     image-rendering: -moz-crisp-edges;
     
     color: ${colors.minecraft.gray};
     
     cursor: default;
     
     &:hover {
      border: 2px solid #000000;
     }
  `}
`;

const Button = ({ children, to, external, disabled }) => {
  if (external) {
    return (
      <StyledButton as="a" href={disabled ? null : to} disabled={disabled}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton to={disabled ? null : to} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
