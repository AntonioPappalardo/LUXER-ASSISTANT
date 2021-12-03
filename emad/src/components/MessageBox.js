import React from 'react';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const MessageBox = (props) => {
    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <FloatingLabelInput
                style={{ textAlignVertical: "top", marginLeft: 10, fontSize: 25, width: 250, marginTop: 75 }}
                label="Messaggio"
                editable
                maxLength={250}
                multiline
                numberOfLines={1}
                
                placeholderTextColor={props.theme.floatingInput.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                rightComponent={<Icon name={Platform.OS === "ios" ? "ios-"+props.icon : "md-"+props.icon } size={20} style={{ marginTop: 10 }} color={props.theme.floatingInput.label} />}
                containerStyles={{
                    minHeight: 58,
                    borderBottomWidth: 1,
                    borderColor: props.theme.floatingInput.border,
                }}
                customLabelStyles={{
                    textAlignVertical: "top",
                    fontFamily: 'SFProDisplayMedium',
                    colorBlurred: props.theme.floatingInput.placeholder,
                    colorFocused: props.theme.floatingInput.placeholder,
                    fontSizeFocused: 12,
                }}
                inputStyles={{
                    fontSize: 18,
                    fontFamily: 'SFProDisplayMedium',
                    paddingTop: 15,
                    paddingLeft: 5,
                    
                    textAlignVertical: "top",
                    color: props.theme.floatingInput.label
                }}
            />
        )
    }
}
export default MessageBox;