/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {createStore, combineReducers} from 'redux';
import {AuthReducer} from './store/reducer/auth';

import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './navigation/AuthNavigation';
import {Provider} from 'react-redux';
import {AppStack} from './navigation/appNavigation';

const rootReducer = combineReducers({
  auth: AuthReducer,
});
const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
