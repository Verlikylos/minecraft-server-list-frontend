import React from 'react';
import styled, { css } from 'styled-components';

import background from '@images/minecraft/background.png';

import { media } from '@utils/index';

import { Container } from '@components/Container';
import { Button, ButtonGroup } from '@components/Button';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 1000;

  height: 128px;
  width: 100%;
  
  overflow: auto;
  
  background: url('${background}');
  
  ${({ withShadow }) =>
    withShadow &&
    css`
      box-shadow: 0px 19px 5px 25px rgba(0, 0, 0, 0.85);
    `}
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: auto;

  ${media.tablet`
    height: 100%;
  `}
`;

const Footer = ({ withButtons, withShadow }) => {
  return (
    <StyledFooter withShadow={withShadow}>
      <StyledContainer>
        {withButtons ? (
          <>
            <ButtonGroup>
              <Button to="/create">Dodaj serwer</Button>
              <Button to="/search">Szukaj</Button>
              <Button to="/">Odśwież</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button to="/">Regulamin</Button>
              <Button to="/">Kontakt</Button>
              <Button to="https://facebook.com/Verlikylos" external>
                Facebook
              </Button>
              <Button to="https://mcshop.io/discord" external>
                Discord
              </Button>
            </ButtonGroup>
          </>
        ) : (
          ''
        )}
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
