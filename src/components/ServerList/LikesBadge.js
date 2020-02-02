import React from 'react';
import styled from 'styled-components';

import hearth from '@images/minecraft/hearth.png';

import { colors } from '@utils';

const StyledLikesBadge = styled.span`
  display: flex;

  margin-top: 3.5px;
`;

const HearthIcon = styled.img`
  width: 14px;
  height: 14px;

  margin-left: 0.25em;

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
`;

const LikesCount = styled.span`
  color: ${colors.minecraft.gray};

  text-shadow: none;
`;

const LikesBadge = ({ likes }) => {
  return (
    <StyledLikesBadge>
      <LikesCount>{likes}</LikesCount>
      <HearthIcon src={hearth} alt="minecraft hearth icon" />
    </StyledLikesBadge>
  );
};

export default LikesBadge;
