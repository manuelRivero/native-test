import React from 'react';
import {
  Container,
  Text,
  Heading,
  Center,
  ScrollView,
  NativeBaseProvider,
  Box,
  Input,
  Button,
  Stack,
} from 'native-base';

export default function Login({navigation}) {
  return (
    <ScrollView flex={1} p={3} background={'gray.100'} w={'100%'}>
      <Container flex={1} m={'auto'} w={'100%'} mt={6} mb={6}>
        <Stack
          flex={1}
          background={'white'}
          w={'100%'}
          p={4}
          borderRadius={4}
          direction="column"
          space={6}>
          <Heading textAlign={'center'}>Inicia sesión</Heading>
          <Input background={'white'} placeholder="Email" width={'100%'} />
          <Input background={'white'} placeholder="Contraseña" width={'100%'} />
          <Button
            onPress={() => navigation.navigate('App', {screen: 'Home'})}
            m={'auto'}>
            Continuar
          </Button>
          <Button
            variant="ghost"
            onPress={() => navigation.navigate('Auth', {screen: 'Register'})}
            m={'auto'}>
            Registrarse
          </Button>
        </Stack>
      </Container>
    </ScrollView>
  );
}
