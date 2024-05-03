const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import Frame from "./components/Frame";
import CoursesScreen from "./screens/CoursesScreen";
import Course1Screen from "./screens/Course1Screen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SuccessScreen from "./screens/SuccessScreen";
import TimetableIntegratedWithQRC from "./screens/TimetableIntegratedWithQRC";
import SplashScreen from "./screens/SplashScreen";
import SplashScreen1 from "./screens/SplashScreen1";
import SplashScreen2 from "./screens/SplashScreen2";
import SplashScreen3 from "./screens/SplashScreen3";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "IrishGrover-Regular": require("./assets/fonts/IrishGrover-Regular.ttf"),
    Inika: require("./assets/fonts/Inika.ttf"),
    "Inika-Bold": require("./assets/fonts/Inika-Bold.ttf"),
    "Inder-Regular": require("./assets/fonts/Inder-Regular.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "PottaOne-Regular": require("./assets/fonts/PottaOne-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CoursesScreen"
              component={CoursesScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Course1Screen"
              component={Course1Screen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessScreen"
              component={SuccessScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TimetableIntegratedWithQRC"
              component={TimetableIntegratedWithQRC}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen1"
              component={SplashScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen2"
              component={SplashScreen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen3"
              component={SplashScreen3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
