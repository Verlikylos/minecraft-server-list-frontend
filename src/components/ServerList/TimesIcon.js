import React from 'react';
import styled, { css } from 'styled-components';

const StyledTimesIcon = styled.div`
  position: relative;
  left: 3px;
  z-index: 11;

  width: 14px;
  height: 14px;

  ${({ loading }) =>
    loading === 'true' &&
    css`
      display: none;
    `}
`;

const TimesLine = styled.span`
  left: 0;
  bottom: 0;

  &,
  &::after,
  &&::before {
    position: absolute;

    width: 2px;
    height: 2px;

    background-color: #ff0000;
  }

  &::after {
    content: '';

    left: 2px;
    bottom: 2px;
  }

  &::before {
    content: '';

    left: 4px;
    bottom: 4px;
  }

  &:nth-child(2) {
    top: 0;
    right: 0;

    transform: rotate(90deg);
  }

  &:nth-child(3) {
    top: 4px;
    right: 4px;
    left: auto;
  }

  &:nth-child(4) {
    bottom: 4px;
    right: 4px;
    left: auto;

    transform: rotate(90deg);
  }

  &:nth-child(5) {
    top: 6px;
    left: 6px;

    &::before,
    &::after {
      display: none;
    }
  }
`;

const TimesLineShadow = styled.span`
  left: 2px;
  bottom: 0;

  &,
  &::after,
  &&::before {
    position: absolute;

    width: 2px;
    height: 2px;

    background-color: #820000;
  }

  &::after {
    content: '';

    left: 2px;
    bottom: 2px;
  }

  &::before {
    content: '';

    left: 4px;
    bottom: 4px;
  }

  &:nth-child(7) {
    bottom: 6px;
    right: 4px;
    left: auto;

    transform: rotate(90deg);
  }

  &:nth-child(8) {
    top: 6px;
    right: 4px;
    left: auto;
  }

  &:nth-child(9) {
    top: 0;
    left: 2px;

    transform: rotate(90deg);
  }
`;

const TimesIcon = ({ loading }) => {
  return (
    <StyledTimesIcon loading={loading}>
      <TimesLine />
      <TimesLine />
      <TimesLine />
      <TimesLine />
      <TimesLine />
      <TimesLineShadow />
      <TimesLineShadow />
      <TimesLineShadow />
      <TimesLineShadow />
    </StyledTimesIcon>
  );
};

export default TimesIcon;
