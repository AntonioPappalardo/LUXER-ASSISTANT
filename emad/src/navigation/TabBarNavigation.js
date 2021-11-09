import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import {BottomTabBarHeightContext,useBottomTabBarHeight , createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BlurView } from 'expo-blur';
import Icon from 'react-native-vector-icons/Feather'
import Home from '../screens/UserHome';
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
					tabBarActiveTintColor: 'rgba(255,255,255,1)',
					tabBarInactiveTintColor: 'rgba(255,255,255,0.3)',
					tabBarShowIcon: true,
					tabBarStyle: { position: 'absolute', backgroundColor: "rgba(27,31,52,0.8)",borderTopWidth: 0 },tabBarShowLabel:false, headerShown: false,
					tabBarBackground: () => (
						<BlurView tint="dark" intensity={100} style={[StyleSheet.absoluteFill]}/>
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
								tintColor={(focused) ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)"}
								name="home"
							/>
						),
					}}

				/>
				<Tab.Screen
					name="Calendar"
					component={Test}
					options={{
						tabBarIcon: ({ focused, color, size }) => (
							<TabBarIcon
								focused={focused}
								tintColor={(focused) ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)"}
								name="calendar"
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Search"
					component={Test}
					options={{
						tabBarIcon: ({ focused, color }) => (
							<TabBarIcon
								focused={focused}
								tintColor={(focused) ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)"}
								name="search"
							/>
						),
					}}
				/>
			</Tab.Navigator>
		)}
	</BottomTabBarHeightContext.Consumer>
)