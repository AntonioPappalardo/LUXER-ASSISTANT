import React from 'react';
import { StyleSheet, Text, View, Image, Platform, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const myIcon1 = <Icon name="comments" size={30} color="#900" />; // Defaults to regular
const ViewImageScreen = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.box1} onPress={() => props.navigation.navigate('Welcome')}><Icon style={{padding:10}} name="arrow-left" size={20} color="white"/></TouchableOpacity>
            <TouchableOpacity style={styles.box2} onPress={() => {
                Alert.alert('Reload Page');
                props.navigation.navigate('ViewImage')}
                }><Icon style={{padding:10}} name="sync" size={20} color="white"/></TouchableOpacity>
            <Image style={styles.image} source={require('../../assets/chair.jpg')} resizeMode="cover" />
            <View style={styles.box}><Text style={styles.text}>Salotto Minimal composto da Sedia e raccogli abiti </Text></View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#f4f7f8'
    },
    box:{
        color:'white',
        top:0
    },
    box1:{
        width:40,
        height:40,
        top:40,
        left:Platform.OS === "android"? 20 : 20,
        justifyContent: 'space-between',
        backgroundColor:'#fc5c65',
        flexDirection:'row',
        alignItems:'flex-start'
    },
    box2:{     
        width:40,
        height:40,
        left: Platform.OS === "android"? 200 : 350,
        justifyContent: 'space-between',
        backgroundColor:'#4ECDC4',
        flexDirection:'row',
        alignItems:'flex-end'
    },
    image: {
        marginTop:14,
        width:"100%",
        height:Platform.OS === "android"? 500 : 600,
    },
    text:{
        paddingTop:10,
        textAlign:'center',
        fontSize:14,
        color:'black',
        fontWeight:'bold'
    }
});

export default ViewImageScreen;