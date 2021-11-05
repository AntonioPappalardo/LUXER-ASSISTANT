import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InitialScreen from './src/screens/InitialScreen';

function App(){
  return (   
    <NavigationContainer >

      <InitialScreen />

    </NavigationContainer>
  )
}
export default App;