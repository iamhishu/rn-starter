import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/listScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    listscreen: ListScreen,
  },
  {
    initialRouteName: "listscreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
