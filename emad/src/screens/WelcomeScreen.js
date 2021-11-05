import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './prova';
import Login from './Login';
const Tab = createBottomTabNavigator();

const WelcomeScreen = (props) => {
    return (
      <Tab.Navigator screenOptions={{tabBarShowIcon: true,  tabBarStyle: {height:70, backgroundColor: "#1B1F34" }, tabBarShowLabel:false, headerShown:false}}>
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon:()=>(
            <FeatherIcon name="home" size={30} color={"white"} />
          ),
          tabBarLabel:"Home",
          
        }}/>
      <Tab.Screen name="Details" component={Home}
      options={{
        tabBarIcon:()=>(
          <SimpleLineIcons name="calendar" size={30} color={"white"} />
        ),
        tabBarLabel:"Home"
      }} />
      <Tab.Screen name="Appointment" component={Home} 
      options={{
        tabBarIcon:()=>(
          <Ionicons name="search-outline" size={30} color={"white"} />
        ),
        tabBarLabel:"Home"
      }}
       />
    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    top:-10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width:"100%",
    height: 640,
  },
  text:{
    textAlign:'center',
    top:60,
  },
  tinylogo:{
    top:50,
    left: 160,
    alignItems: 'center',
    justifyContent: 'center',
    width:90, 
    height:90
  },
  text_section:{
    color:'white',
    fontWeight:'bold',
    padding:20,
    textAlign:'center',
  }

});

export default WelcomeScreen;