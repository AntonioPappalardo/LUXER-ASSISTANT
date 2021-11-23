import React from "react";
import { View } from "react-native";
import { Appearance } from 'react-native';
import dark from '../../src/theme/dark';
import light from '../../src/theme/light';

const colorScheme = Appearance.getColorScheme();

const Divider = (props) => {

  if (colorScheme === 'dark') {
    var colorTheme = dark;
  } else {
    var colorTheme = light;
  }
  if (props.type === 'fixed') {
    colorTheme.divider.background = 'white';
  }
  return (
    <View

      opacity={props.opacity}
      style={{
        width: '75%',
        alignSelf: 'center',
        borderBottomColor: colorTheme.divider.background,
        borderBottomWidth: 0.5
      }}
    />
  )
};

export default Divider;