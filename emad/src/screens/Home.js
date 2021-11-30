import React, { Component } from 'react';
import {Platform } from 'react-native'
import {CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import AddUser from './AddUser';
import Catalogo from './Catalogo';
import Category from './Category';
import Cart from './Cart';
import Communication from './Communication';
import Impostazioni from './Impostazioni';
import Login from './Login';
import ProductPage from './ProductPage';
import ScanQR from './ScanQR';
import searchUser from './searchUser';
import UserHome from './UserHome';
import UserPage from './UserPage';
const Stack = createStackNavigator();


const Home = ({ navigation }) => {
  if (Platform.OS === "ios") {
    var CardStyleEffect = CardStyleInterpolators.forVerticalIOS;
  } else {
    var CardStyleEffect = CardStyleInterpolators.forRevealFromBottomAndroid;
  }

  return (
    <Stack.Navigator initialRouteName="UserHome" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="AddUser" component={AddUser} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Catalogo" component={Catalogo} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Category" component={Category} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Cart" component={Cart} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Communication" component={Communication} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Impostazioni" component={Impostazioni} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Login" component={Login} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="ProductPage" component={ProductPage} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="ScanQR" component={ScanQR} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="searchUser" component={searchUser} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="UserHome"component={UserHome} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="UserPage" component={UserPage} options={{cardStyleInterpolator: CardStyleEffect}}/>
    </Stack.Navigator>
  );
};



export default Home;