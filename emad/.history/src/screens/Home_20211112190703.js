import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserHome from './UserHome';
import AddUser from './AddUser'
import Catalogo from './Catalogo'
import prova from './prova';
const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
      <Stack.Navigator initialRouteName="UserHome" screenOptions={{ headerShown:false}}>
          <Stack.Screen name="UserHome" component={UserHome}/>
          <Stack.Screen name="AddUser" component={AddUser}/>
          <Stack.Screen name="Catalogo" component={Catalogo}/>
      </Stack.Navigator>
  );
};



export default Home;