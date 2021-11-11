import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const InputButton = (props) => {
    return (
      <View style={{ marginTop: props.params.marginTop, marginBottom: props.params.marginBottom, justifyContent: 'center', alignItems: 'center' }} >
        <View style={{ width: props.params.width }}>
          <TouchableOpacity
            style={{ width: '100%', height: 54, borderRadius: 27, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2D62ED',shadowColor: '#000',
            shadowOffset: { width: 1, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            elevation: 5 }}
            onPress={props.onPress}>
            <Text style={styles.text}>
              {props.name}
            </Text>
            <View style={[styles.circleIcon, { backgroundColor: "#789AF3" }]}>
              <Icon name={props.icon} size={25} color={"white"} style={{ transform: [{ rotateZ: props.rotation }], }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    circleIcon: {
        position: 'absolute',
        right: 15,
        top: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        height: 40,
        width: 40,
        borderRadius: 20
      },
      text:{
        fontSize: 18,
        marginLeft: 10, 
        color: '#fff', 
        fontWeight: 'bold'
      },
  });
export default InputButton;