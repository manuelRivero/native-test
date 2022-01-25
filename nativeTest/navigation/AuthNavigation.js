import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NativeBaseProvider} from 'native-base';

import Login from '../screens/login';
import Register from '../screens/register';

const LoginStack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <LoginStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  );
};
export default function AuthStack() {
  return <LoginStackNavigator />;
}
