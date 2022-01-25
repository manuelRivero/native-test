import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import AuthStack from './AuthNavigation';
import HomeStack from './homeNavigation';

const Stack = createStackNavigator();

const AppStackNAvigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="App"
        component={HomeStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export function AppStack() {
  return (
    <NativeBaseProvider>
      <AppStackNAvigator />
    </NativeBaseProvider>
  );
}
