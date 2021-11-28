import React from 'react';
import { View, Text, TouchableOpacity, Appearance } from "react-native";
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
const colorScheme = Appearance.getColorScheme();

const SizeFilter = (props) => {
    const [show, setSelected] = React.useState(false)
    const toggleColor = () => setSelected(show => !show)
    
    if (colorScheme === 'dark') {
        var colorTheme = dark;
    } else {
        var colorTheme = light;
    }
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <TouchableOpacity activeOpacity={0.75} onPress={toggleColor}>
                {show ?
                    <View style={{
                        marginRight: 7,
                        width: 20,
                        height: 20,
                        borderRadius: 5,
                        backgroundColor: colorTheme.sizeFilter.background,
                        shadowColor: '#000000',
                        shadowOffset: { width: 1, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 5, elevation: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                       <Text style={{fontFamily:'SFProDisplayBold', fontSize: 12, color:colorTheme.sizeFilter.primary}}>
                            {props.size}
                        </Text>
                    </View>
                    :
                    <View style={{
                        marginRight: 7,
                        width: 20,
                        height: 20,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                        <Text style={{fontFamily:'SFProDisplayBold', fontSize: 12,color:colorTheme.sizeFilter.secondary}}>
                            {props.size}
                        </Text>
                    </View>
                }

            </TouchableOpacity>
        )
    }
}
export default SizeFilter;