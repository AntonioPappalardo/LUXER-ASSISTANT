import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import InputButton from "../components/InputButton";
import InputText from "../components/InputText";
import { AuthContext } from "./context";

const addUser= ({})=> {
    const [nome, setNome] = React.useState('');
    const [cognome, setCognome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [tel, setTelefono] = React.useState('');
    const [sesso, setSesso] = React.useState('');
    const [eta, setEta] = React.useState('');
    const [nazionalita, setNazionalita] = React.useState('');

    //const { add } = React.useContext(AuthContext)
    return (
    <ScrollView style={styles.screen}>
        <Text style={styles.text}>Nuovo Cliente</Text>
        <View style={styles.form}>
        <InputText params={{ marginTop: 10, width: "100%" , paddingLeft: 25, textAlign: "left"}} 
        name="Nome" icon="" rotation="0deg" value={nome} onChangeText={setNome} secure='false'/>

        <InputText params={{ marginTop: 10, width: "100%" , paddingLeft: 25, textAlign: "left"}} 
        name="Cognome" icon="" rotation="0deg" value={cognome} onChangeText={setCognome} secure='false'/>

        <InputText params={{ marginTop: 10, width: "100%" , paddingLeft: 25, textAlign: "left"}} 
        name="Email" icon="" rotation="0deg" value={email} onChangeText={setEmail} secure='false'/>

        <InputText params={{ marginTop: 10, width: "100%" , paddingLeft: 50, textAlign: "left"}} 
        name="+39 111 222 33 44" icon="call-outline" rotation="0deg" value={tel} onChangeText={setTelefono} secure='false'/>

        <InputText params={{ marginTop: 10, width: "100%" , paddingLeft: 25, textAlign: "left"}} 
        name="Sesso" icon="" rotation="0deg" value={sesso} onChangeText={setSesso} secure='false'/>

        <InputText params={{ marginTop: 10, width: "100%" , paddingLeft: 25, textAlign: "left"}} 
        name="Età" icon="" rotation="0deg" value={eta} onChangeText={setEta} secure='false'/>

        <InputText params={{ marginTop: 10, width: "100%" , paddingLeft: 25, textAlign: "left"}} 
        name="Nazionalità" icon="" rotation="0deg" value={nazionalita} onChangeText={setNazionalita} secure='false'/>

        <InputButton params={{ marginTop: 50, width: "75%", marginBottom: 40}} name="Conferma" icon="arrow-forward-outline" rotation="-45deg" onPress={() => signIn({ username, password })} />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text:{
    alignSelf:'center',
    top:50,
    fontSize:25,
    color:'white',
    fontWeight:'bold'
  },
  form:{
    marginTop:30,
    padding:20
  },
  screen:{
    height:"100%",
    backgroundColor:"#2A2E43"
  }
});

export default addUser;
