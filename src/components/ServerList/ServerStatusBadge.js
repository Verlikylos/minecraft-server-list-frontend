import React from 'react';
import styled from 'styled-components';

import { colors } from '@utils';

import ServerStatusIcon from '@components/ServerList/ServerStatusIcon';
import { Color } from '@components/Color';

const StyledServerStatusBadge = styled.span`
  display: flex;
`;

const PlayersCount = styled.span`
  color: ${colors.minecraft.gray};

  text-shadow: none;
`;

const ServerStatusBadge = ({ serverId, players, maxPlayers, health }) => {
  return (
    <StyledServerStatusBadge>
      {health != null ? (
        <PlayersCount>
          {players}
          <Color color={colors.minecraft.dark_gray}>/</Color>
          {maxPlayers}
        </PlayersCount>
      ) : (
        ''
      )}
      <ServerStatusIcon serverId={serverId} health={health} />
    </StyledServerStatusBadge>
  );
};

export default ServerStatusBadge;
