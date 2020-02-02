import styled, { css } from 'styled-components';

import { media } from '@utils';

const Container = styled.div`
  width: 100%;

  padding: 0 15px;
  margin: 0 auto;

  ${media.phone`
    max-width: 540px;
    
    ${({ inputWidth }) =>
      inputWidth &&
      css`
        max-width: 430px;
      `}
  `}

  ${media.tablet`
    max-width: 720px;
    
    ${({ inputWidth }) =>
      inputWidth &&
      css`
        max-width: 430px;
      `}
  `}
`;

export default Container;
