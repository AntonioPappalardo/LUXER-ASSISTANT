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
import AppointmentList from './customer/AppointmentList';

const Stack = createStackNavigator();

const CalendarSection = ({ navigation , route}) => {
  
  var utente=route.params.user
  if (Platform.OS === "ios") {
    var CardStyleEffect = CardStyleInterpolators.forHorizontalIOS;
  } else {
    var CardStyleEffect = CardStyleInterpolators.forRevealFromBottomAndroid;
  }

  return (
    <Stack.Navigator initialRouteName="AppointmentList" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="AppointmentList" component={AppointmentList} initialParams={{ "user": utente }} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="AddAppointment" component={AddAppointment} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Communication" component={Communication} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="CustomerPage" component={CustomerPage} options={{cardStyleInterpolator: CardStyleEffect}}/>
    </Stack.Navigator>
  );
};



export default CalendarSection;