import React from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

import { AuthContext } from "./context";

const Login= ({})=> {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(AuthContext)
    return (
    <View>
        <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <Button title="Sign in" onPress={() => signIn({ username, password })} />
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

export default Login;
