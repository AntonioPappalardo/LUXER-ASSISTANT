import React from 'react'
import { TouchableOpacity, StyleSheet, Platform} from 'react-native'
import { BottomTabBarHeightContext, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BlurView } from 'expo-blur';
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../screens/Home';
import SearchProduct from '../screens/shop/SearchProduct';
import SearchUser from '../screens/customer/SearchUser';
import AppointmentList from '../screens/customer/AppointmentList';
import { useTheme } from "../theme/ThemeProvider";
import { getUtenteById } from '../back/connect';
import { useLanguage } from "../localization/Localization";

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
var tabColor = 'light';

const TabBarNavigation = (props) => {
	const [lang, setLanguage] = useLanguage();
	const {colors, isDark} = useTheme();
	isDark ? tabColor = 'dark' : tabColor = 'light'
	var utente =props.route.params.user
	
	Platform.OS === "ios" ? 
	BlurTabBar = <BlurView tint={colors.tabbar.mode} intensity={100} style={[StyleSheet.absoluteFill]} /> : 
	BlurTabBar = <BlurView tint={colors.tabbar.mode} intensity={200} style={[StyleSheet.absoluteFill]} /> 
	return(
	<BottomTabBarHeightContext.Consumer>
		{tabBarHeight => (
			<Tab.Navigator
				initialRouteName="Home"
				screenOptions={{
					tabBarActiveTintColor: colors.tabbar.active,
					tabBarInactiveTintColor: colors.tabbar.inactive,
					tabBarShowIcon: true,
					tabBarStyle: { position: 'absolute', elevation: 0, borderTopWidth: 0 },
					tabBarHideOnKeyboard: true,
					tabBarShowLabel: true,
					headerShown: false,
					tabBarItemStyle: {paddingTop: 5},
					tabBarButton: props => <TouchableOpacity activeOpacity={.3} {...props} />,
					tabBarBackground: () => (
						BlurTabBar
					),
					
				}}
				
			>
				<Tab.Screen
					name="Home"
					component={Home}
					initialParams={{ "user": utente }}
					options={{
						tabBarIcon: ({ focused, color }) => (
							<TabBarIcon
								focused={focused}
								tintColor={(focused) ? colors.tabbar.active : colors.tabbar.inactive}
								name={Platform.OS === "ios" ? "ios-home" : "md-home"}
							/>
						),
						tabBarLabel:lang.home
					}}


				/>
				<Tab.Screen
					name="Clienti"
					component={SearchUser}
					initialParams={{ "user": utente }}
					options={{
						tabBarIcon: ({ focused, color }) => (
							<TabBarIcon
								focused={focused}
								tintColor={(focused) ? colors.tabbar.active : colors.tabbar.inactive}
								name={Platform.OS === "ios" ? "ios-person" : "md-person"}
							/>
						),
						tabBarLabel:lang.clienti

					}}
				/>
				<Tab.Screen
					name="Calendario"
					component={AppointmentList}
					initialParams={{ "user": utente }}
					options={{
						
						tabBarIcon: ({ focused, color, size }) => (
							<TabBarIcon
								focused={focused}
								tintColor={(focused) ? colors.tabbar.active : colors.tabbar.inactive}
								name={Platform.OS === "ios" ? "ios-calendar" : "md-calendar"}
							/>
						),
						tabBarLabel:lang.calendario

					}}

				/>
				<Tab.Screen
					name="Cerca"
					component={SearchProduct}
					initialParams={{ "user": utente }}
					options={{
						tabBarIcon: ({ focused, color }) => (
							<TabBarIcon
								focused={focused}
								tintColor={(focused) ? colors.tabbar.active : colors.tabbar.inactive}
								name="search"
							/>
						),
						tabBarLabel:lang.cerca

					}}
				/>
			</Tab.Navigator>
		)}
	</BottomTabBarHeightContext.Consumer>
	)
}
export default TabBarNavigation;