import React from 'react';

import { Layout } from '@components/Layout';
import { ServerListItem } from '@components/ServerList';
import { Button, ButtonGroup } from '@components/Button';
import { Color } from '@components/Color';

import { colors } from '@utils';

import nightland from '@images/servers/nightland.png';

const server = {
  id: 2,
  icon: nightland,
  title: <Color color={colors.minecraft.gold}>mc.nightland.pl</Color>,
  description: [
    <span>
      <Color color={colors.minecraft.blue}>Night</Color>
      <Color color={colors.minecraft.white}>Land</Color>
      <Color color={colors.minecraft.gray}>.</Color>
      <Color color={colors.minecraft.white}>pl</Color>&nbsp;
      <Color color={colors.minecraft.gray}>»</Color>&nbsp;
      <Color color={colors.minecraft.dark_aqua}>Survival</Color>&nbsp;
      <Color color={colors.minecraft.dark_gray}>●</Color>&nbsp;
      <Color color={colors.minecraft.dark_aqua}>1.14.4</Color>
    </span>,
    <span>
      <Color color={colors.minecraft.green}>
        Wszystko powinno już działać jak należy.
      </Color>
    </span>,
  ],
  health: 5,
  players: 23,
  maxPlayers: 50,
  version: '1.14.4',
  likes: 712,
};

const ServerPage = () => {
  return (
    <Layout title="Serwer mc.nightland.pl">
      <ServerListItem
        as="div"
        solid
        icon={server.icon}
        title={server.title}
        description={server.description}
        health={server.health}
        players={server.players}
        maxPlayers={server.maxPlayers}
        version={server.version}
        likes={server.likes}
      />
      <ButtonGroup withMargin>
        <Button to="/">Powrót</Button>
      </ButtonGroup>
    </Layout>
  );
};

export default ServerPage;
