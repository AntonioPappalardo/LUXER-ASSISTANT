import React from 'react';
import {Platform } from 'react-native'
import {CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import AddUser from './customer/AddUser';
import AddAppointment from './customer/AddAppointment';
import Catalog from './shop/Catalog';
import Category from './shop/Category';
import Cart from './shop/Cart';
import Communication from './customer/Communication';
import CustomerPage from './customer/CustomerPage';
import ProductPage from './shop/ProductPage';
import ScanQR from './shop/ScanQR';
import SearchUser from './customer/SearchUser';
import Settings from './user/Settings';
import Store from './shop/Store';
import StoreList from './shop/StoreList';
import UserHome from './user/UserHome';
import Info from './user/Info';
import Notes from './user/Notes';
import Privacy from './user/Privacy';
import ExpoAR from '../ar/ExpoAR';
import SearchProduct from './shop/SearchProduct';

const Stack = createStackNavigator();

const SearchSection = ({ navigation , route}) => {
  
  var utente=route.params.user
  if (Platform.OS === "ios") {
    var CardStyleEffect = CardStyleInterpolators.forHorizontalIOS;
  } else {
    var CardStyleEffect = CardStyleInterpolators.forRevealFromBottomAndroid;
  }

  return (
    <Stack.Navigator initialRouteName="SearchProduct" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="SearchProduct"  initialParams={{ "user": utente }} component={SearchProduct}  options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="ProductPage" component={ProductPage} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="ScanQR" component={ScanQR} initialParams={{ "utente": utente }} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="ExpoAR" component={ExpoAR} options={{cardStyleInterpolator: CardStyleEffect}}/>
    </Stack.Navigator>
  );
};



export default SearchSection;