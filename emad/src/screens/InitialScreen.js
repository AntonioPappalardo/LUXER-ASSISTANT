import React from 'react';
import {CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './intro/SplashScreen';
import Login from './user/Login';
import Payment from './shop/Payment';
import TabBarNavigation from '../navigation/TabBarNavigation';
import { AuthContext } from './context';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const InitialScreen = (props) => {
    const authContext = React.useMemo(() => ({
        signIn: (username, password) => {
            setUserToken({ "username": username, "password": password });
        }
    }))
    const [userToken, setUserToken] = React.useState(null);
    if (Platform.OS === "ios") {
        var CardStyleEffect = CardStyleInterpolators.forVerticalIOS;
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

const styles = StyleSheet.create({
    tinylogo: {
        alignSelf: 'center',
        width: 140,
        height: 110
    },
    maintext: {
        fontSize: 30
    },
    text: {
        alignSelf: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    logo: {
        top: 75,
    },
    screen: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "white"

    },
    scree: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#1B1C22"

    },
    load: {
        flexDirection: "column",
        bottom: 75
    },
    power: {
        marginBottom: 10,
        alignItems: 'center'
    },
    textpower: {

        marginBottom: 8,
        color: '#7379B7',

    },
    accenture: {
        width: 163,
        height: 43
    }
});
export default InitialScreen;
