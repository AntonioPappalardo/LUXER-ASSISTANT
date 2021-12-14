import React from 'react';
import {CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './intro/SplashScreen';
import Login from './user/Login';
import Payment from './shop/Payment';
import TabBarNavigation from '../navigation/TabBarNavigation';
import { AuthContext } from './context';
import { StyleSheet } from 'react-native';
import { LogBox } from 'react-native';


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createStackNavigator();

const InitialScreen = (props) => {
    const authContext = React.useMemo(() => ({
        signIn: (username, password) => {
            setUserToken({ "username": username, "password": password });
        }
    }))
    const [userToken, setUserToken] = React.useState(null);
    if (Platform.OS === "ios") {
        var CardStyleEffect = CardStyleInterpolators.forHorizontalIOS;
      } else {
        var CardStyleEffect = CardStyleInterpolators.forRevealFromBottomAndroid;
      }
    return (
        
        <AuthContext.Provider value={authContext}>
           
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{cardStyleInterpolator: CardStyleEffect}}/>
                <Stack.Screen name="Login" component={Login} options={{cardStyleInterpolator: CardStyleEffect}}/>
                <Stack.Screen name="TabBar" component={TabBarNavigation} options={{cardStyleInterpolator: CardStyleEffect}}/>
                <Stack.Screen name="Payment" component={Payment} options={{cardStyleInterpolator: CardStyleEffect}}/>
            </Stack.Navigator>
        </AuthContext.Provider>
    );
}

export default InitialScreen;
