import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import ViewFormScreen from "./src/screens/ViewFormScreen";

const navigator = createStackNavigator({
  Welcome: WelcomeScreen,
  ViewImage:ViewImageScreen,
  ViewForm:ViewFormScreen

}, {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
        title: "App",
        headerShown: false
    },
});


export default createAppContainer(navigator);