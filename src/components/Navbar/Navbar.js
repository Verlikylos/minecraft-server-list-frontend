import React from 'react';
import styled, { css } from 'styled-components';

import background from '@images/minecraft/background.png';

import { Container } from '@components/Container';

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1000;

  height: 64px;
  width: 100%;

  background: url('${background}');
  
  ${({ withShadow }) =>
    withShadow &&
    css`
      box-shadow: 0px -19px 5px 25px rgba(0, 0, 0, 0.85);
    `}
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

const Navbar = ({ withShadow }) => {
  return (
    <StyledNavbar withShadow={withShadow}>
      <StyledContainer>
        <h1>Minecraft Server List</h1>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default Navbar;
