import React, { useState } from 'react';

import { Layout } from '@components/Layout';
import { Button, ButtonGroup } from '@components/Button';
import { TextFormGroup } from '@components/FormGroup';
import { Container } from '@components/Container';

const CreateServerPage = () => {
  const [serverName, setServerName] = useState('Minecraft Server');
  const [serverAddress, setServerAddress] = useState('');

  const updateServerName = event => {
    setServerName(event.target.value);
  };

  const updateServerAddress = event => {
    setServerAddress(event.target.value);
  };

  return (
    <Layout title="Dodaj serwer">
      <Container inputWidth>
        <TextFormGroup
          withMoreMargin
          title="Nazwa Serwera"
          name="serverName"
          onChange={event => updateServerName(event)}
          value={serverName}
        />
        <TextFormGroup
          title="Adres Serwera"
          name="serverAddress"
          onChange={event => updateServerAddress(event)}
          value={serverAddress}
        />
      </Container>

      <ButtonGroup withMargin>
        <Button to="/" disabled={serverAddress === '' || serverName === ''}>
          Gotowe
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button to="/">Powrót</Button>
      </ButtonGroup>
    </Layout>
  );
};

export default CreateServerPage;
