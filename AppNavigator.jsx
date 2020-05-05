import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator,createAppContainer } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { DrawerItems } from 'react-navigation-drawer';
import { NavigationActions } from 'react-navigation';


const Screen1 = (props) => {
  return (
    <View style={{...styles.containerStyles, backgroundColor: 'red'}}>
      <Text>This is screen 1!</Text>
    </View>
  )
};

const Screen2 = (props) => {
  return (
    <View style={{...styles.containerStyles, backgroundColor: 'green'}}>
      <Text>This is screen 2!</Text>
    </View>
  )
};

const Screen3 = (props) => {
  return (
    <View style={{...styles.containerStyles, backgroundColor: 'blue'}}>
      <Text>This is screen 3!</Text>
    </View>
  )
};


const DrawerNavigator = createDrawerNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      drawerLabel: "Screen One"
    }
  },
  MyCustomers: {
    screen: Screen2,
    navigationOptions: {
      drawerLabel: "Screen Two"
    }
  },
  // combine negotiations with the marketplace
  GetCustomers: {
    screen: Screen3,
    navigationOptions: {
      drawerLabel: "Screen Three",
      testID: 'drawer_placebids'
    }
  },
},
{
  initialRouteName: 'Screen One',
  contentOptions: {
    activeTintColor: '#039be5',
  },
  
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});


export default createAppContainer(createSwitchNavigator(
	{
    App: DrawerNavigator,
	},
	{
		initialRouteName: 'App',
	}
));
