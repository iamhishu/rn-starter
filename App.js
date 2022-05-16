import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Componentscreen from "./src/screens/ComponentsScreen/ComponentScreen";
import ListScreen from "./src/screens/listScreen";
import ImageScreen from "./src/screens/ComponentsScreen/ImageScreen";
import ColorGentrator from "./src/screens/ComponentsScreen/ColorGentrator";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Listscreen: ListScreen,
    Componentscreen: Componentscreen,
    ImageScreeen: ImageScreen,
    ColorGentrator: ColorGentrator,
  },
  {
    initialRouteName: "ColorGentrator",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
