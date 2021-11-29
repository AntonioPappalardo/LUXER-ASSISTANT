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

  return (
    <View
      opacity={props.opacity}
      style={{
        width: props.width,
        alignSelf: 'center',
        borderBottomColor: colorTheme.divider.background,
        borderBottomWidth: 0.5,
        marginBottom: props.marginBottom
      }}
    />
  )
};

export default Divider;