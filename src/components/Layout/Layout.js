import React from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import styled, { createGlobalStyle, css } from 'styled-components';
import 'normalize.css';

import { Navbar } from '@components/Navbar';
import { Footer } from '@components/Footer';

import background from '@images/minecraft/background.png';

import fontMinecraftOtf from '@fonts/minecraft-regular/minecraft-regular.otf';

import { Container } from '@components/Container';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Minecraft Regular';
    src: url('${fontMinecraftOtf}') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  
  * {
    box-sizing: border-box;
  }

  body {
    background: url('${background}');
    
    font-family: 'Minecraft Regular', sans-serif;
    -webkit-font-smoothing: none;
    -moz-osx-font-smoothing: grayscale;
    font-size: 32px;
    
    color: white;
    
    text-shadow: 2px 2px 0px #3f3f3f;
    word-spacing: .15em;
  }
  
  h1, h2, h3, h4, h5, h6, span, p, button, label, small {
    color: #ffffff;
  
    font-family: 'Minecraft Regular', sans-serif;
    font-weight: normal;
    -webkit-font-smoothing: none;
    -moz-osx-font-smoothing: grayscale;
    font-size: 32px;
    line-height: .6;
    text-rendering: optimizeLegibility; 
    
    text-shadow: 2px 2px 0px #3f3f3f;
    text-decoration: none;
    word-spacing: .15em;
  }
`;

const StyledMain = styled(Container)`
  height: 100%;

  padding-top: 64px;
  padding-bottom: 128px;
`;

const BackgroundMask = styled.div`
  width: 100%;
  min-height: 100vh;

  ${({ maskVisible }) =>
    maskVisible &&
    css`
      background: rgba(0, 0, 0, 0.45);
    `}
`;

const Layout = ({ children, title, withButtons, withMaskedMain }) => {
  return (
    <BackgroundMask maskVisible={withMaskedMain}>
      <Helmet>
        <html lang="pl" />
        <title>{'Minecraft Server List | ' + title}</title>
      </Helmet>
      <GlobalStyle />
      <Navbar withShadow={withMaskedMain}>te</Navbar>
      <StyledMain as="main">{children}</StyledMain>
      <Footer withButtons={withButtons} withShadow={withMaskedMain} />
    </BackgroundMask>
  );
};

export default Layout;
