import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NativeBaseProvider} from 'native-base';

import Login from '../screens/login';
import Register from '../screens/register';
import Home from '../screens/home';
import Services from '../screens/services';

const Stack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();

const homeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Services"
        component={Services}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={homeStackNavigator}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  );
};
export function AuthStack() {
  return (
    <NativeBaseProvider>
      <LoginStackNavigator />
    </NativeBaseProvider>
  );
}
