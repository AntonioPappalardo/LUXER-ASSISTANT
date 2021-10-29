import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const WelcomeScreen = (props) => {
    return (
    <View style={styles.container} >
 
          <Text style={styles.text}>Sell What You Don't Need!</Text>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    top:-10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width:"100%",
    height: 640,
  },
  text:{
    textAlign:'center',
    top:60,
  },
  tinylogo:{
    top:50,
    left: 160,
    alignItems: 'center',
    justifyContent: 'center',
    width:90, 
    height:90
  },
  text_section:{
    color:'white',
    fontWeight:'bold',
    padding:20,
    textAlign:'center',
  }

});

export default WelcomeScreen;