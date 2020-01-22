import React from 'react';
import { createSwitchNavigator,createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SigninScreen from './src/screens/SigninScreen';
import SingupScreen from './src/screens/SingupScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';



const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Singup:SingupScreen,
    Signin:SigninScreen
  }),
  mainFlow:createBottomTabNavigator({
    trackListFlow:createStackNavigator({
      TrackList:TrackListScreen,
      TrackDetail:TrackDetailScreen
    }),
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen
  })
}); 

export default createAppContainer(switchNavigator);