import React from 'react';
import {Platform } from 'react-native'
import {CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import AddAppointment from './customer/AddAppointment';
import Communication from './customer/Communication';
import CustomerPage from './customer/CustomerPage';
import SearchUser from './customer/SearchUser';

const Stack = createStackNavigator();

const CostumerSection = ({ navigation , route}) => {
  
  var utente=route.params.user
  if (Platform.OS === "ios") {
    var CardStyleEffect = CardStyleInterpolators.forHorizontalIOS;
  } else {
    var CardStyleEffect = CardStyleInterpolators.forRevealFromBottomAndroid;
  }

  return (
    <Stack.Navigator initialRouteName="SearchUser" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="AddAppointment" component={AddAppointment} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Communication" component={Communication} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="CustomerPage" component={CustomerPage} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="SearchUser"  component={SearchUser} initialParams={{ "user": utente }} options={{cardStyleInterpolator: CardStyleEffect}}/>
    </Stack.Navigator>
  );
};



export default CostumerSection;