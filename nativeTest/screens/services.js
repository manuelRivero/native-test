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

export default function Register({navigation}) {
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
          <Heading textAlign={'center'}>Servicios</Heading>
        </Stack>
      </Container>
    </ScrollView>
  );
}
