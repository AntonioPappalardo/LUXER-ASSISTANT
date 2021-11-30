import React from "react";
import { Image, View, Text, TouchableOpacity, ScrollView, TouchableHighlight } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import BackButton from "../components/BackButton";
import Divider from "../components/Divider";
import InputText from "../components/InputText";
import { useTheme } from "../theme/ThemeProvider";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


const Impostazioni = ({ navigation }) => {
        const { colors, setScheme, isDark } = useTheme();

        const toggleScheme = () => {
            isDark ? setScheme('light') : setScheme('dark');
        }

    }:

    export default appointmentList;