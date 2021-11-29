import React, { Component } from 'react';
import {Platform } from 'react-native'
import {CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import UserHome from './UserHome';
import AddUser from './AddUser';
import Catalogo from './Catalogo';
import Login from './Login';
import Communication from './Communication';
import searchUser from './searchUser';
import prova from './prova';
import Category from './Category';
import ScanQR from './ScanQR';
import Impostazioni from './Impostazioni';
import UserPage from '.UserPage';

const Stack = createStackNavigator();


const Home = ({ navigation }) => {
  if (Platform.OS === "ios") {
    var CardStyleEffect = CardStyleInterpolators.forVerticalIOS;
  } else {
    var CardStyleEffect = CardStyleInterpolators.forRevealFromBottomAndroid;
  }

  return (
    <Stack.Navigator initialRouteName="UserHome" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="UserHome"component={UserHome} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="AddUser" component={AddUser} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Catalogo" component={Catalogo} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Login" component={Login} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Communication" component={Communication} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="searchUser" component={searchUser} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Category" component={Category} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="ScanQR" component={ScanQR} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Impostazioni" component={Impostazioni} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="UserPage" component={UserPage} options={{cardStyleInterpolator: CardStyleEffect}}/>
    </Stack.Navigator>
  );
};



export default Home;