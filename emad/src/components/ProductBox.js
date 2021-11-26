import React from "react";
import { StyleSheet, Image, Dimensions, View, Text, TouchableOpacity, Appearance } from "react-native";
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const colorScheme = Appearance.getColorScheme();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProductBox = (props) => {
  if (colorScheme === 'dark') {
    var colorTheme = dark;
  } else {
    var colorTheme = light;
  }
  let [fontsLoaded] = useFonts({
    'SFProDisplayMedium': require('../../assets/fonts/SFProDisplayMedium.otf'),
    'SFProDisplayBold': require('../../assets/fonts/SFProDisplayBold.otf'),
    'SFProDisplayRegular': require('../../assets/fonts/SFProDisplayRegular.otf'),
    'SFProDisplayThinItalic': require('../../assets/fonts/SFProDisplayThinItalic.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      
      <TouchableOpacity
        activeOpacity={.75}
        style={{ padding: 10, paddingTop: 10, flexBasis: '50%' }}
        onPress={props.onPress} >
        <Image source={ props.image } style={{ width: (windowWidth * 0.45), height: windowHeight * 0.3, borderRadius: 5, marginBottom: 10}} />
          <View>
            <View style={{height: 40,justifyContent: "center"}}>
          <Text numberOfLines={2} style={{ color: colorTheme.productBox.name, fontFamily: "SFProDisplayMedium", fontSize: 14  }}>{props.name}</Text>
            </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: colorTheme.productBox.price, fontFamily: "SFProDisplayThinItalic", fontWeight: '200',fontSize: 14, width: "50%"}}>{props.price + " €"}</Text>
            <Text style={{ color: colorTheme.productBox.reference, fontFamily: "SFProDisplayRegular", fontSize: 11, textAlign: 'right', width: "50%", paddingTop: 3.5 }}> {"Ref " + props.reference}</Text>
            
          </View>
        </View>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  
  item: {
    width: '50%' // is 50% of container width
  }

});


export default ProductBox;