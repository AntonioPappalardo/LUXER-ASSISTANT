import React from 'react'
import {TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'
import Home from '../screens/UserHome';
import Test from '../screens/prova';

const Tabs = createBottomTabNavigator()

const TabBarIcon = props => {
	return (
		<Icon
			name={props.name}
			size={props.size ? props.size : 24}
			color={props.tintColor}
		/>
	)
}

export default () => (
	<Tabs.Navigator 
	initialRouteName="Home" 
	screenOptions={{
		tabBarActiveTintColor: 'rgba(255,255,255,1)',
		tabBarInactiveTintColor: 'rgba(255,255,255,0.3)',
		tabBarShowIcon: true,  
		tabBarStyle: {backgroundColor: "#1B1F34",borderTopWidth: 0}, headerShown:false,
		tabBarButton: props => <TouchableOpacity {...props} />
	}}
	backgroundColor= 'transparent'
	>
		<Tabs.Screen
			name="Home"
			component={Home}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon
						focused={focused}
						tintColor={(focused) ?"rgba(255,255,255,1)":"rgba(255,255,255,0.3)"}
						name="home"
					/>
				),
			}}
			
		/>
		<Tabs.Screen
			name="Calendar"
			component={Test}
			options={{
				tabBarIcon: ({ focused, color, size }) => (
					<TabBarIcon
						focused={focused}
						tintColor={(focused) ?"rgba(255,255,255,1)":"rgba(255,255,255,0.3)"}
						name="calendar"
					/>
				),
			}}
		/>
		<Tabs.Screen
			name="Search"
			component={Test}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon
						focused={focused}
						tintColor={(focused) ?"rgba(255,255,255,1)":"rgba(255,255,255,0.3)"}
						name="search"
					/>
				),
			}}
		/>
	</Tabs.Navigator>
)