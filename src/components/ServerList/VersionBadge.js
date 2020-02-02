import React from 'react';
import styled from 'styled-components';

import enderEye from '@images/minecraft/ender_eye.png';

import { colors } from '@utils';

const StyledVersionBadge = styled.span`
  display: flex;

  margin-top: 3.5px;
`;

const EnderEyeIcon = styled.img`
  width: 14px;
  height: 14px;

  margin-left: 0.25em;

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
`;

const Version = styled.span`
  color: ${colors.minecraft.gray};

  text-shadow: none;
`;

const VersionBadge = ({ version }) => {
  return (
    <StyledVersionBadge>
      <Version>{version}</Version>
      <EnderEyeIcon src={enderEye} />
    </StyledVersionBadge>
  );
};

export default VersionBadge;
