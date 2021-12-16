import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import InitialScreen from './src/screens/InitialScreen'
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider} from './src/theme/ThemeProvider';
import {connect} from "./src/db/connect"

connect()

export default function App() {
	return (
		<AppearanceProvider >
			<ThemeProvider>
				<NavigationContainer>
					<InitialScreen />
				</NavigationContainer>
			</ThemeProvider>
		</AppearanceProvider>
	)
}