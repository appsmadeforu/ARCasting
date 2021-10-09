import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./components/Screens/HomeScreen";
import LoginScreen from "./components/Screens/LoginScreen";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "ARC"
    },
  }
);

export default createAppContainer(navigator);
