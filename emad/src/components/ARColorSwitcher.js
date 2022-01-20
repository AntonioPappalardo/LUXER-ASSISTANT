import React from 'react';
import { View, TouchableOpacity } from "react-native";


const ARColorSwitcher = (props) => {
    const [show, setSelected] = React.useState(false)
   
    return (
        <TouchableOpacity activeOpacity={0.75} onPress={props.onPress}>

            <View style={{  marginRight: 5, marginBottom: 10 }}>
                <View style={{
                    marginTop: 2,
                    marginRight: 7,
                    width: 25,
                    height: 25,
                    borderRadius: 12.5,
                    borderColor: 'white',
                    borderWidth: 2,
                    backgroundColor: "#" + props.color,
                    shadowColor: '#000000',
                    shadowOffset: { width: 1, height: 2 },
                    shadowOpacity: 1,
                    shadowRadius: 5, elevation: 5
                }}
                />
            </View>
        </TouchableOpacity>
    )

}
export default ARColorSwitcher;