import React from "react";
import { View } from "react-native";
import { useTheme } from "../theme/ThemeProvider";

const Divider = (props) => {

  const {colors, isDark} = useTheme();

  return (
    <View
      opacity={props.opacity}
      style={{
        width: props.width,
        alignSelf: 'center',
        borderBottomColor: colors.divider.background,
        borderBottomWidth: 0.5,
        marginBottom: props.marginBottom
      }}
    />
  )
};

export default Divider;