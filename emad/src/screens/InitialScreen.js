import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import AppNavigation from '../navigation/AppNavigation';
import TabBarNavigation from '../navigation/TabBarNavigation';
import { AuthContext } from './context';
const Stack = createStackNavigator();

const InitialScreen = (props) => {
    const [userToken,setUserToken] = React.useState(null);


    const authContext= React.useMemo(()=> ({
        signIn:(username,password)=>{
            setUserToken({"username":username,"password":password});
        } 
    }))
    return (
        <AuthContext.Provider value={authContext}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
                { userToken == null ?(
                <Stack.Screen name="Login" component={Login}/>):(
                    <Stack.Screen name="WelcomeScreen" component={TabBarNavigation} options={{headerShown: false}}/>
                )}
        </Stack.Navigator>
        </AuthContext.Provider>
  );
}

export default InitialScreen;