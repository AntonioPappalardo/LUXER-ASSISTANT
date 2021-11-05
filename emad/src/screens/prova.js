import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const Home= ({navigation})=> {
  return(
  <View>
    <Text style={styles.maintext}>HomeScreen</Text>
    <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
  </View>
  );
};

const styles = StyleSheet.create({
  maintext: {
    fontSize: 30
  },
  text:{
    fontSize:20
  }
});

export default Home;
