import React from 'react';
import styled from 'styled-components';

import { media } from '@utils/index';

const StyledTextInput = styled.input`
  height: 44px;
  width: 100%;
  max-width: 400px;

  padding: 0 0.25em;

  color: #ffffff;

  background-color: #000000;

  vertical-align: middle;

  border: 2px solid #a0a0a0;
  outline: none;

  ${media.phone`
    width: 100%
  `}
`;

const MyComponent = props => {
  return <StyledTextInput type="text" {...props} />;
};

export default MyComponent;
