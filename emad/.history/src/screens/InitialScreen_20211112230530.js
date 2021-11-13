import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import TabBarNavigation from '../navigation/TabBarNavigation';
import { AuthContext } from './context';
import { View, ActivityIndicator, Image, Text, StyleSheet } from 'react-native';
const Stack = createStackNavigator();


const InitialScreen = (props) => {
    const [userToken, setUserToken] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isLoadin, setIsLoadin] = React.useState(true);

    const authContext = React.useMemo(() => ({
        signIn: (username, password) => {
            setUserToken({ "username": username, "password": password });
        }
    }))
    useEffect(() => {
        setTimeout(() => {
            setIsLoadin(false)
        }, 2000)
    })
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
    })

    if (isLoading) {
        if (isLoadin) {
            return (
                <View style={styles.screen}>
                    <View style={styles.logo}>
                        <Image style={styles.tinylogo} source={require('../../assets/logo.png')} />
                        
                    </View>
                    <View style={styles.load}>
                        <ActivityIndicator size="large" color="#7379B7" />
                        <View style={styles.power}>
                            <Text style={styles.textpower}>Powered By</Text>
                            <Image style={styles.accenture} source={require('../../assets/accenture-black.png')} />
                        </View>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={styles.scree}>
                    <View style={styles.logo}>
                        <Image style={styles.tinylogo} source={require('../../assets/logo.png')} />
                        
                    </View>
                    <View style={styles.load}>
                        <ActivityIndicator size="large" color="#7379B7" />
                        <View style={styles.power}>
                            <Text style={styles.textpower}>Powered By</Text>
                            <Image style={styles.accenture} source={require('../../assets/accenture-white.png')} />
                        </View>
                    </View>
                </View>
            )
        }
    }

    else return (
        <AuthContext.Provider value={authContext}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {userToken == null ? (
                    <Stack.Screen name="Login" component={Login} />) : (
                    <Stack.Screen name="WelcomeScreen" component={TabBarNavigation} options={{ headerShown: false }} />
                )}
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
        marginBottom: 5,
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
