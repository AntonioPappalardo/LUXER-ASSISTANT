import React from 'react'
import { TouchableOpacity, StyleSheet, Platform, Appearance } from 'react-native'
import { BottomTabBarHeightContext, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BlurView } from 'expo-blur';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import Icon from 'react-native-vector-icons/Ionicons'
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
var BlurTabBar = null;
const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
	var colorTheme = dark;
	var tabColor = 'dark';
} else {
	var colorTheme = light;
	var tabColor = 'light';
}
Platform.OS === "ios" ? BlurTabBar = <BlurView tint={tabColor} intensity={150} style={[StyleSheet.absoluteFill]} /> : BlurTabBar = <BlurView tint={tabColor} intensity={200} style={[StyleSheet.absoluteFill]} /> 
export default () => (
	<BottomTabBarHeightContext.Consumer>
		{tabBarHeight => (
			<Tab.Navigator
				initialRouteName="Home"
				screenOptions={{
					tabBarActiveTintColor: colorTheme.tabbar.active,
					tabBarInactiveTintColor: colorTheme.tabbar.inactive,
					tabBarShowIcon: true,
					tabBarStyle: { position: 'absolute', elevation: 0, borderTopWidth: 0, paddingTop: 5, paddingBottom: 5 },
					tabBarHideOnKeyboard: true,
					tabBarShowLabel: true,
					headerShown: false,
					tabBarButton: props => <TouchableOpacity activeOpacity={.3} {...props} />,
					tabBarBackground: () => (
						BlurTabBar
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
								tintColor={(focused) ? colorTheme.tabbar.active : colorTheme.tabbar.inactive}
								name={Platform.OS === "ios" ? "ios-home" : "md-home"}
							/>
						),
					}}

				/>
				<Tab.Screen
					name="Clienti"
					component={Home}
					options={{
						tabBarIcon: ({ focused, color }) => (
							<TabBarIcon
								focused={focused}
								tintColor={(focused) ? colorTheme.tabbar.active : colorTheme.tabbar.inactive}
								name={Platform.OS === "ios" ? "ios-person" : "md-person"}
							/>
						),
					}}

				/>
				<Tab.Screen
					name="Calendario"
					component={Home}
					options={{
						
						tabBarIcon: ({ focused, color, size }) => (
							<TabBarIcon
								focused={focused}
								tintColor={(focused) ? colorTheme.tabbar.active : colorTheme.tabbar.inactive}
								name={Platform.OS === "ios" ? "ios-calendar" : "md-calendar"}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Cerca"
					component={Search}
					options={{
						tabBarIcon: ({ focused, color }) => (
							<TabBarIcon
								focused={focused}
								tintColor={(focused) ? colorTheme.tabbar.active : colorTheme.tabbar.inactive}
								name="search"
							/>
						),
					}}
				/>
			</Tab.Navigator>
		)}
	</BottomTabBarHeightContext.Consumer>
)