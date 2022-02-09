import React from "react";
import { StyleSheet, Image, Dimensions, View, Text, TouchableOpacity} from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProductBox = (props) => {

  const {colors, isDark} = useTheme();
  function numberWithPointers(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
          <Text numberOfLines={2} style={{ color: colors.productBox.name, fontFamily: "SFProDisplayMedium", fontSize: 14  }}>{props.name}</Text>
            </View>
          <View style={{ flexDirection: 'row', marginTop:-5 }}>
            <Text style={{ color: colors.productBox.price, fontFamily: "SFProDisplayThinItalic", fontWeight: '200', marginTop:8, fontSize: 14, width: "50%"}}>{"€ "+ numberWithPointers(props.price) }</Text>
            <Text style={{ color: colors.productBox.reference, fontFamily: "SFProDisplayRegular", fontSize: 9, textAlign: 'right', width: "50%", paddingTop: 3.5 }}> {"Ref. " + props.reference}</Text>
            
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