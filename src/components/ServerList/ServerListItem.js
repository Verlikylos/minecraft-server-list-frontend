import React from 'react';
import styled, { css } from 'styled-components';

import unknownServer from '@images/minecraft/unknown_server.png';

import { colors, media } from '@utils';

import { Link } from 'gatsby';
import LikesBadge from '@components/ServerList/LikesBadge';
import VersionBadge from '@components/ServerList/VersionBadge';
import ServerStatusBadge from '@components/ServerList/ServerStatusBadge';
import { Color } from '@components/Color';

const StyledServerListItem = styled.li`
  display: flex;
  flex-wrap: wrap;

  padding: 0.25em;

  text-decoration: none;

  border: 2px solid transparent;

  transition: border ease-in-out 0.1s, background-color ease-in-out 0.1s;

  &:hover {
    background-color: #000000;

    border: 2px solid ${colors.minecraft.gray};
  }

  cursor: pointer;

  ${({ solid }) =>
    solid &&
    css`
      background-color: #000000;

      border: 2px solid ${colors.minecraft.gray};

      cursor: default;
    `}

  ${media.phone`
    flex-wrap: nowrap;
  `}
`;

const ServerIcon = styled.img`
  width: 64px;
  height: 64px;
  flex: 64px 64px;

  order: 2;

  ${media.phone`
    order: 1;
  `}
`;

const ServerDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  order: 1;

  width: 100%;

  margin-left: 0.25em;

  ${media.phone`
    order: 2;
  `}
`;

const ServerName = styled.h3`
  margin: 1px 0 4px 0;

  text-shadow: none;
`;

const ServerDescription = styled.p`
  display: none;

  margin: 0 0 2px 0;

  color: ${colors.minecraft.dark_red};

  text-shadow: none;

  &:last-child {
    margin: 0;
  }

  ${media.phone`
    display: block;
  `}
`;

const ServerStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1 1 auto;
  order: 3;
`;

const ServerListItem = ({
  id,
  icon,
  title,
  description,
  players,
  maxPlayers,
  health,
  version,
  likes,
  solid,
}) => {
  if (health == null) {
    icon = unknownServer;
    description = [
      <Color color={colors.minecraft.dark_red}>
        Nie można połączyć z serwerem
      </Color>,
    ];
    players = null;
    maxPlayers = null;
    version = null;
  }

  return (
    <StyledServerListItem solid={solid} as={Link} to="/server">
      <ServerIcon src={icon} />
      <ServerDetails>
        <ServerName>{title}</ServerName>
        {description.map((line, index) => (
          <ServerDescription key={index + '-desc-' + id}>
            {line}
          </ServerDescription>
        ))}
      </ServerDetails>
      <ServerStatus>
        <ServerStatusBadge
          serverId={id}
          players={players}
          maxPlayers={maxPlayers}
          health={health}
        />
        {version != null ? <VersionBadge version={version} /> : ''}
        <LikesBadge likes={likes} />
      </ServerStatus>
    </StyledServerListItem>
  );
};

export default ServerListItem;
