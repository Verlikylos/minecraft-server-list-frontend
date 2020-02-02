import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@utils';

import { TextInput } from '@components/TextInput';

const StyledTextFormGroup = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 0.5em;

  ${({ withMoreMargin }) =>
    withMoreMargin &&
    css`
      margin-top: 2em;
    `}
`;

const InputLabel = styled.label`
  margin-bottom: 0.25em;

  color: ${colors.minecraft.gray};
`;

const TextFormGroup = ({ title, name, value, onChange }) => {
  return (
    <StyledTextFormGroup>
      <InputLabel>{title}</InputLabel>
      <TextInput name={name} value={value} onChange={onChange} />
    </StyledTextFormGroup>
  );
};

export default TextFormGroup;
