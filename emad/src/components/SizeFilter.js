import React from 'react';
import { View, Text, TouchableOpacity} from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const SizeFilter = (props) => {

    const {colors, isDark} = useTheme();

    const [show, setSelected] = React.useState(false)
    const toggleColor = () => {
        setSelected(show => !show)
        props.OnSizeFilter(props.size)
    
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
                        marginRight: 1,
                        marginLeft: 2,
                        paddingLeft: 4,
                        paddingRight: 4,
                        height: 20,
                        borderRadius: 5,
                        backgroundColor: colors.sizeFilter.background,
                        shadowColor: '#000000',
                        shadowOffset: { width: 1, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 5, elevation: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                       <Text style={{fontFamily:'SFProDisplayBold', fontSize: 12, color:colors.sizeFilter.primary}}>
                            {props.size}
                        </Text>
                    </View>
                    :
                    <View style={{
                        marginRight: 1,
                        marginLeft: 2,
                        paddingLeft: 4,
                        paddingRight: 4,
                        height: 20,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                        <Text style={{fontFamily:'SFProDisplayBold', fontSize: 12,color:colors.sizeFilter.secondary}}>
                            {props.size}
                        </Text>
                    </View>
                }

            </TouchableOpacity>
        )
    }
}
export default SizeFilter;