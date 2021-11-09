import React, { useState } from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import Icon from 'react-native-vector-icons/Feather';
import Home from '../screens/UserHome';
import Test from '../screens/prova';

const tabs = [
	{
	  name: 'Home',
	  activeIcon: <Icon name="home" color="#fff" size={25} />,
	  inactiveIcon: <Icon name="home" color="rgba(255,255,255,0.3)" size={25} />,
	  component: Home
	},
	{
	  name: 'list',
	  activeIcon: <Icon name="calendar" color="#fff" size={25} />,
	  inactiveIcon: <Icon name="calendar" color="rgba(255,255,255,0.3)" size={25} />,
	  component: Test
	},
	{
	  name: 'Profile',
	  activeIcon: <Icon name="search" color="#fff" size={25} />,
	  inactiveIcon: <Icon name="search" color="rgba(255,255,255,0.3)" size={25} />,
	  component: Test
	},
];

const AppNavigation = ( props ) => {
	return (
		<View style={{ backgroundColor: "#2A2E43", flex: 1 }}>
		<Home/>
		<Tabbar
		  tabs={tabs}
		  tabBarContainerBackground='#1B233F'
		  tabBarBackground='#2A2E43'
		  activeTabBackground='#1B233F'
		  labelStyle={{fontSize: 0 }}
		  onTabChange={() => console.log('Tab changed')}
		/>
		</View>
	  );

}

export default AppNavigation


