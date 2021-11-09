import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import InitialScreen from './src/screens/InitialScreen'


export default function App() {
	return (
		<NavigationContainer>
			<InitialScreen />
		</NavigationContainer>
	)
}