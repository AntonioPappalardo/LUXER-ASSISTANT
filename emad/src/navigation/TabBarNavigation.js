import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import {BottomTabBarHeightContext, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BlurView } from 'expo-blur';
import Icon from 'react-native-vector-icons/Feather'
import Home from '../screens/Home';
import Search from '../screens/Search';
import Test from '../screens/prova';

const Tab = createBottomTabNavigator()
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
	<BottomTabBarHeightContext.Consumer>
		{tabBarHeight => (
			<Tab.Navigator
				initialRouteName="Home"
				screenOptions={{
					tabBarActiveTintColor: 'rgba(52, 183, 241,1)',
					tabBarInactiveTintColor: 'rgba(255,255,255,1)',
					tabBarShowIcon: true,
					tabBarStyle: {position: 'absolute',elevation: 0, borderTopWidth: 0}, tabBarShowLabel: true, headerShown: false,
					tabBarButton: props => <TouchableOpacity activeOpacity={.3} {...props} />,
					tabBarBackground: () => (
						<BlurView tint="dark" intensity={100} style={[StyleSheet.absoluteFill]} />
					),
				}}
			>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarIcon: ({ focused, color }) => (
							<TabBarIcon
								focused={focused}
								tintColor={(focused) ? "rgba(52, 183, 241,1)" : "rgba(255,255,255,1)"}
								name="home"
							/>
						),
					}}

				/>
				<Tab.Screen
					name="Calendar"
					component={Home}
					options={{
						tabBarIcon: ({ focused, color, size }) => (
							<TabBarIcon
								focused={focused}
								tintColor={(focused) ? "rgba(52, 183, 241,1)" : "rgba(255,255,255,1)"}
								name="calendar"
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Search"
					component={Home}
					options={{
						tabBarIcon: ({ focused, color }) => (
							<TabBarIcon
								focused={focused}
								tintColor={(focused) ? "rgba(52, 183, 241,1)" : "rgba(255,255,255,1)"}
								name="search"
							/>
						),
					}}
				/>
			</Tab.Navigator>
		)}
	</BottomTabBarHeightContext.Consumer>
)