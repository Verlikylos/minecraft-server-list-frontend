import styled, { css } from 'styled-components';

import { media } from '@utils';

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  ${({ withMargin }) =>
    withMargin &&
    css`
      margin-top: 6em;
    `}

  button,
  a {
    width: 100%;
  }

  ${media.tablet`
    flex-direction: row;
  `}
`;

export default ButtonGroup;
