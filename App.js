import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Componentscreen from "./src/screens/ComponentsScreen/ComponentScreen";
import ListScreen from "./src/screens/listScreen";
import ImageScreen from "./src/screens/ComponentsScreen/ImageScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Listscreen: ListScreen,
    Componentscreen: Componentscreen,
    ImageScreeen: ImageScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
