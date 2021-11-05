import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/WelcomeScreen';

function App(){
  return (   
    <NavigationContainer >

      <WelcomeScreen />

    </NavigationContainer>
  )
}
export default App;