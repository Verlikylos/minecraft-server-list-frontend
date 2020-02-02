import React from 'react';
import styled from 'styled-components';

import { Layout } from '@components/Layout';
import { ServerList, ServerListItem } from '@components/ServerList';
import { Color } from '@components/Color';

import { colors } from '@utils';

import bell from '@images/minecraft/bell.png';

import nssv from '@images/servers/nssv.png';
import nightland from '@images/servers/nightland.png';
import hypixel from '@images/servers/hypixel.png';

import lecraft from '@images/servers/lecraft.png';
import vertez from '@images/servers/vertez.png';
import skyup from '@images/servers/skyup.png';
import krainamc from '@images/servers/krainamc.png';

const ServerListHeader = styled.h3`
  display: flex;
  align-items: center;

  margin-top: 1em;

  text-shadow: none;

  span {
    margin-top: 0.2em;

    color: ${colors.minecraft.gold};

    text-shadow: none;
  }
`;

const BellIcon = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 0.25em;

  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
`;

const premiumServers = [
  {
    id: 1,
    icon: nssv,
    title: <Color color={colors.minecraft.gold}>nssv.pl</Color>,
    description: [
      <span>
        <Color color={colors.minecraft.gold}>NETHER</Color>
        <Color color={colors.minecraft.yellow}>STORM</Color>&nbsp;
        <Color color={colors.minecraft.gray}>Strona WWW:</Color>&nbsp;
        <Color color={colors.minecraft.gold}>www.nssv.pl</Color>
      </span>,
      <span>
        <Color color={colors.minecraft.gray}>Trwa nowa edycja</Color>&nbsp;
        <Color color={colors.minecraft.green}>Mega Drop</Color>
        <Color color={colors.minecraft.gray}>, zapraszamy!</Color>
      </span>,
    ],
    health: 3,
    players: 995,
    maxPlayers: 999,
    version: '1.15.2',
    likes: 86,
  },
  {
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
  },
  {
    id: 3,
    icon: hypixel,
    title: <Color color={colors.minecraft.gold}>hypixel.net</Color>,
    description: [
      <span>
        <Color color={colors.minecraft.green}>Hypixel Network</Color>&nbsp;
        <Color color={colors.minecraft.red}>[1.8-1.15]</Color>
      </span>,
      <span>
        <Color color={colors.minecraft.dark_purple}>&lt;^__)~</Color>&nbsp;
        <Color color={colors.minecraft.red}>WINTER SALE</Color>&nbsp;
        <Color color={colors.minecraft.gray}>-</Color>&nbsp;
        <Color color={colors.minecraft.gold}>UP TO</Color>&nbsp;
        <Color color={colors.minecraft.aqua}>85%</Color>&nbsp;
        <Color color={colors.minecraft.gold}>OFF</Color>&nbsp;
        <Color color={colors.minecraft.dark_purple}>~(__^&gt;</Color>
      </span>,
    ],
    health: 5,
    players: 53224,
    maxPlayers: 80000,
    version: '1.15.2',
    likes: 180,
  },
];

const servers = [
  {
    id: 4,
    icon: lecraft,
    title: 'lecraft.pl',
    description: [
      <span>
        <Color color={colors.minecraft.green}>LeCraft.pl</Color>&nbsp;
        <Color color={colors.minecraft.red}>1.8.8 - 1.14.3</Color>
      </span>,
      <span>
        <Color color={colors.minecraft.green}>
          Serdecznie zapraszamy do wsólnej gry!
        </Color>
      </span>,
    ],
    health: 3,
    players: 251,
    maxPlayers: 1024,
    version: '1.14.3',
    likes: 96,
  },
  {
    id: 5,
    icon: vertez,
    title: 'vertez.pl',
    description: [
      <span>
        <Color color={colors.minecraft.yellow}>Vertez</Color>
        <Color color={colors.minecraft.red}>.</Color>
        <Color color={colors.minecraft.green}>pl</Color>&nbsp;
        <Color color={colors.minecraft.dark_gray}>|</Color>&nbsp;
        <Color color={colors.minecraft.gray}>Twój hub gier</Color>
        <Color color={colors.minecraft.dark_gray}>! |</Color>&nbsp;
        <Color color={colors.minecraft.gray}>Użyj</Color>&nbsp;
        <Color color={colors.minecraft.red}>1.8-1.13!</Color>
      </span>,
      <span>
        <Color color={colors.minecraft.red}>-20%</Color>&nbsp;
        <Color color={colors.minecraft.yellow}>WSZYSTKO NA</Color>&nbsp;
        <Color color={colors.minecraft.green}>SKYWARS</Color>
      </span>,
    ],
    health: 2,
    players: 1519,
    maxPlayers: 3000,
    version: '1.13',
    likes: 62,
  },
  {
    id: 6,
    icon: skyup,
    title: 'skyup.pl',
    description: [
      <span>
        <Color color={colors.minecraft.green}>NOWA EDYCJA</Color>&nbsp;
        <Color color={colors.minecraft.aqua}>SB</Color>&nbsp;
        <Color color={colors.minecraft.gold}>&gt;&gt;</Color>&nbsp;
        <Color color={colors.minecraft.aqua}>SKY</Color>
        <Color color={colors.minecraft.white}>UP</Color>
        <Color color={colors.minecraft.yellow}>.PL</Color>&nbsp;
        <Color color={colors.minecraft.gold}>&lt;&lt;</Color>&nbsp;
        <Color color={colors.minecraft.yellow}>[</Color>
        <Color color={colors.minecraft.gold}>1.15.2</Color>
        <Color color={colors.minecraft.yellow}>]</Color>
      </span>,
      <span>
        <Color color={colors.minecraft.green}>Nowa edycja</Color>&nbsp;
        <Color color={colors.minecraft.aqua}>Skyblock</Color>&nbsp;
        <Color color={colors.minecraft.green}>już</Color>&nbsp;
        <Color color={colors.minecraft.dark_green}>otwarta</Color>
        <Color color={colors.minecraft.green}>!</Color>
      </span>,
    ],
    health: 1,
    players: 105,
    maxPlayers: 300,
    version: '1.15.2',
    likes: 6,
  },
  {
    id: 7,
    icon: null,
    title: 'feerko.pl',
    description: [],
    health: null,
    players: null,
    maxPlayers: null,
    version: null,
    likes: 50,
  },
  {
    id: 8,
    icon: krainamc,
    title: 'krainamc.pl',
    description: [
      <span>
        <Color color={colors.minecraft.gold}>KrainaMc.pl</Color>
      </span>,
      <span>
        <Color color={colors.minecraft.yellow}>
          Wpadaj pograć razem z nami!
        </Color>
      </span>,
    ],
    health: 5,
    players: 562,
    maxPlayers: 1000,
    version: '1.15.2',
    likes: 627,
  },
];

const IndexPage = () => {
  return (
    <Layout withButtons withMaskedMain title="Strona główna">
      <ServerListHeader>
        <BellIcon src={bell} />
        <span>Promowane serwery</span>
      </ServerListHeader>
      <ServerList>
        {premiumServers.map(item => (
          <ServerListItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            health={item.health}
            players={item.players}
            maxPlayers={item.maxPlayers}
            version={item.version}
            likes={item.likes}
          />
        ))}
      </ServerList>

      <ServerListHeader>Pozostałe serwery</ServerListHeader>
      <ServerList>
        {servers.map(item => (
          <ServerListItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            health={item.health}
            players={item.players}
            maxPlayers={item.maxPlayers}
            version={item.version}
            likes={item.likes}
          />
        ))}
      </ServerList>
    </Layout>
  );
};

export default IndexPage;
