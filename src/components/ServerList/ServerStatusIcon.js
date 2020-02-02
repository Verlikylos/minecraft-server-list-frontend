import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

import TimesIcon from '@components/ServerList/TimesIcon';

const StyledServerStatusIcon = styled.div`
  position: relative;
  z-index: 10;

  width: 20px;
  height: 14px;

  margin-left: 0.25em;
`;

const FirstBarAnimation = keyframes`
  from, to, 20%, 30%, 40%, 50%, 60%, 70%, 80%  {
    background-color: #5b5b5b;
  }

  10%, 90% {
    background-color: #004eff;
  }
`;

const SecondBarAnimation = keyframes`
  from, to, 10%, 30%, 40%, 50%, 60%, 70%, 90% {
    background-color: #5b5b5b;
  }
  
  20%, 80%  {
    background-color: #004eff;
  }
`;

const ThirdBarAnimation = keyframes`
  from, to, 10%, 20%, 40%, 50%, 60%, 80%, 90% {
    background-color: #5b5b5b;
  }
  
  30%, 70%  {
    background-color: #004eff;
  }
`;

const FourthBarAnimation = keyframes`
  from, to, 10%, 20%, 30%, 50%, 70%, 80%, 90% {
    background-color: #5b5b5b;
  }
  
  40%, 60%  {
    background-color: #004eff;
  }
`;

const FifthBarAnimation = keyframes`
  from, to, 10%, 20%, 30%, 40%, 60%, 70%, 80%, 90% {
    background-color: #5b5b5b;
  }
  
  50%  {
    background-color: #004eff;
  }
`;

const FirstBarShadowAnimation = keyframes`
  from, to, 20%, 30%, 40%, 50%, 60%, 70%, 80%  {
    background-color: #383838;
  }

  10%, 90% {
    background-color: #002982;
  }
`;

const SecondBarShadowAnimation = keyframes`
  from, to, 10%, 30%, 40%, 50%, 60%, 70%, 90% {
    background-color: #383838;
  }
  
  20%, 80%  {
    background-color: #002982;
  }
`;

const ThirdBarShadowAnimation = keyframes`
  from, to, 10%, 20%, 40%, 50%, 60%, 80%, 90% {
    background-color: #383838;
  }
  
  30%, 70%  {
    background-color: #002982;
  }
`;

const FourthBarShadowAnimation = keyframes`
  from, to, 10%, 20%, 30%, 50%, 70%, 80%, 90% {
    background-color: #383838;
  }
  
  40%, 60%  {
    background-color: #002982;
  }
`;

const FifthBarShadowAnimation = keyframes`
  from, to, 10%, 20%, 30%, 40%, 60%, 70%, 80%, 90% {
    background-color: #383838;
  }
  
  50%  {
    background-color: #002982;
  }
`;

const StatusLine = styled.span`
  position: absolute;
  z-index: 10;
  bottom: 2px;

  width: 2px;

  background-color: #5b5b5b;

  ${({ green }) =>
    green &&
    `
    background-color: #00ff21;
  `}

  &:nth-child(2), 
  &:nth-child(4), 
  &:nth-child(6), 
  &:nth-child(8), 
  &:nth-child(10) {
    bottom: 0;

    background-color: #383838;

    ${({ green }) =>
      green &&
      `
      background-color: #00870f;
    `}
  }

  &:first-child {
    left: 0;

    height: 4px;

    ${({ loading }) =>
      loading === 'true' &&
      css`
        animation: ${FirstBarAnimation} 1s steps(11, jump-end) infinite;
      `}
  }

  &:nth-child(2) {
    left: 2px;

    height: 4px;

    ${({ loading }) =>
      loading === 'true' &&
      css`
        animation: ${FirstBarShadowAnimation} 1s steps(11, jump-end) infinite;
      `}
  }

  &:nth-child(3) {
    left: 4px;

    height: 6px;

    ${({ loading }) =>
      loading === 'true' &&
      css`
        animation: ${SecondBarAnimation} 1s steps(11, jump-end) infinite;
      `}
  }

  &:nth-child(4) {
    left: 6px;

    height: 6px;

    ${({ loading }) =>
      loading === 'true' &&
      css`
        animation: ${SecondBarShadowAnimation} 1s steps(11, jump-end) infinite;
      `}
  }

  &:nth-child(5) {
    left: 8px;

    height: 8px;

    ${({ loading }) =>
      loading === 'true' &&
      css`
        animation: ${ThirdBarAnimation} 1s steps(11, jump-end) infinite;
      `}
  }

  &:nth-child(6) {
    left: 10px;

    height: 8px;

    ${({ loading }) =>
      loading === 'true' &&
      css`
        animation: ${ThirdBarShadowAnimation} 1s steps(11, jump-end) infinite;
      `}
  }

  &:nth-child(7) {
    left: 12px;

    height: 10px;

    ${({ loading }) =>
      loading === 'true' &&
      css`
        animation: ${FourthBarAnimation} 1s steps(11, jump-end) infinite;
      `}
  }

  &:nth-child(8) {
    left: 14px;

    height: 10px;

    ${({ loading }) =>
      loading === 'true' &&
      css`
        animation: ${FourthBarShadowAnimation} 1s steps(11, jump-end) infinite;
      `}
  }

  &:nth-child(9) {
    left: 16px;

    height: 12px;

    ${({ loading }) =>
      loading === 'true' &&
      css`
        animation: ${FifthBarAnimation} 1s steps(11, jump-end) infinite;
      `}
  }

  &:nth-child(10) {
    left: 18px;

    height: 12px;

    ${({ loading }) =>
      loading === 'true' &&
      css`
        animation: ${FifthBarShadowAnimation} 1s steps(11, jump-end) infinite;
      `}
  }
`;

const getStatusBars = health => {
  let result = [];

  for (let i = 1; i <= 5; i++) {
    result.push(<StatusLine green={i <= health} />);
    result.push(<StatusLine green={i <= health} />);
  }

  return result;
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

const ServerStatusIcon = ({ serverId, health }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    setTimeout(
      () => !isCancelled && setLoading(false),
      getRandomInt(500, 3000)
    );

    return () => {
      isCancelled = true;
    };
  });

  let icon = getStatusBars(health);

  return (
    <StyledServerStatusIcon>
      {icon.map((item, index) =>
        React.cloneElement(item, {
          loading: loading.toString(),
          key: index + '-' + serverId,
        })
      )}
      {health == null ? <TimesIcon loading={loading.toString()} /> : ''}
    </StyledServerStatusIcon>
  );
};

export default ServerStatusIcon;
