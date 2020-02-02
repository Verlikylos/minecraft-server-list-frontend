import React, { useState } from 'react';

import { Layout } from '@components/Layout';
import { Button, ButtonGroup } from '@components/Button';
import { TextFormGroup } from '@components/FormGroup';
import { Container } from '@components/Container';

const CreateServerPage = () => {
  const [serverName, setServerName] = useState('');

  const updateServerName = event => {
    setServerName(event.target.value);
  };

  return (
    <Layout title="Wyszukaj serwer">
      <Container inputWidth>
        <TextFormGroup
          withMoreMargin
          title="Nazwa Serwera"
          name="serverName"
          onChange={event => updateServerName(event)}
          value={serverName}
        />
      </Container>

      <ButtonGroup withMargin>
        <Button to="/" disabled={serverName === ''}>
          Szukaj
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button to="/">Powrót</Button>
      </ButtonGroup>
    </Layout>
  );
};

export default CreateServerPage;
