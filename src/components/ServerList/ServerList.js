import React from 'react';
import styled from 'styled-components';

const StyledServerList = styled.ul`
  margin: 0;
  margin-bottom: 1em;
  padding: 0;

  list-style: none;
`;

const ServerList = ({ children }) => {
  return <StyledServerList>{children}</StyledServerList>;
};

export default ServerList;
