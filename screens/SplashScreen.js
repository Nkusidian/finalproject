import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <ImageBackground
      style={[styles.splashScreen4Icon, styles.iconLayout]}
      resizeMode="cover"
      source={require("../assets/coursesscreen.png")}
    >
      <Image
        style={styles.pepiconsPopLineX3}
        contentFit="cover"
        source={require("../assets/pepiconspoplinex-3.png")}
      />
      <Image
        style={[styles.splashScreen4Child, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/frame-5.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/frame-5.png")}
      />
      <Image
        style={styles.fluentDiamond20Filled1Icon}
        contentFit="cover"
        source={require("../assets/fluentdiamond20filled-1.png")}
      />
      <View style={styles.maskGroup49}>
        <View style={styles.button}>
          <View style={styles.buttonprimary}>
            <Image
              style={[styles.buttonprimaryBackgroundIcon, styles.titlePosition]}
              contentFit="cover"
              source={require("../assets/buttonprimary-background3.png")}
            />
            <View style={styles.signUpWrapper}>
              <Text style={[styles.signUp, styles.logInTypo]}>Sign up</Text>
            </View>
          </View>
          <View style={[styles.buttonsecondary, styles.titlePosition]}>
            <Image
              style={[styles.buttonprimaryBackgroundIcon, styles.titlePosition]}
              contentFit="cover"
              source={require("../assets/buttonsecondary-background.png")}
            />
            <View style={styles.logInWrapper}>
              <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
            </View>
          </View>
        </View>
        <View style={styles.text}>
          <Text style={[styles.getNotifiedAbout, styles.getPosition]}>
            Get notified about class changes, pending quizzes and and assignment
            updates from your lectures
          </Text>
        </View>
        <View style={[styles.title, styles.titlePosition]}>
          <Text
            style={[styles.getNotifiedAny, styles.getPosition]}
          >{`Get notified any where
you are about learning 
updates`}</Text>
        </View>
      </View>
      <Image
        style={styles.splashScreen4Item}
        contentFit="cover"
        source={require("../assets/rectangle-93.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/frame-5.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  vectorIconLayout: {
    height: 21,
    width: 21,
    position: "absolute",
  },
  titlePosition: {
    top: "0%",
    position: "absolute",
  },
  logInTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  getPosition: {
    textAlign: "center",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  pepiconsPopLineX3: {
    marginLeft: -67,
    top: 800,
    left: "50%",
    width: 133,
    height: 63,
    position: "absolute",
    overflow: "hidden",
  },
  splashScreen4Child: {
    marginTop: 344,
    top: "50%",
    right: 142,
  },
  vectorIcon: {
    top: 766,
    left: 200,
  },
  fluentDiamond20Filled1Icon: {
    top: 763,
    left: 254,
    width: 25,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  buttonprimaryBackgroundIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    overflow: "hidden",
    width: "100%",
  },
  signUp: {
    color: Color.colorWhite,
  },
  signUpWrapper: {
    height: "48%",
    width: "38.13%",
    top: "28%",
    right: "31.12%",
    bottom: "24%",
    left: "30.75%",
    position: "absolute",
  },
  buttonprimary: {
    height: "99.01%",
    width: "47.72%",
    top: "0.4%",
    right: "52.28%",
    bottom: "0.59%",
    left: "0%",
    position: "absolute",
  },
  logIn: {
    color: Color.colorMediumslateblue,
  },
  logInWrapper: {
    height: "47.52%",
    width: "29.28%",
    top: "28.12%",
    right: "35.7%",
    bottom: "24.36%",
    left: "35.02%",
    position: "absolute",
  },
  buttonsecondary: {
    width: "47.87%",
    left: "52.13%",
    height: "100%",
    top: "0%",
    bottom: "0%",
    right: "0%",
  },
  button: {
    height: "16.82%",
    top: "83.18%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  getNotifiedAbout: {
    fontFamily: FontFamily.poppinsRegular,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    textAlign: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    height: "32.63%",
    width: "71.58%",
    top: "35.3%",
    right: "14.11%",
    bottom: "32.07%",
    left: "14.32%",
    position: "absolute",
  },
  getNotifiedAny: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray,
  },
  title: {
    height: "32.97%",
    width: "78.44%",
    right: "9.63%",
    bottom: "67.03%",
    left: "11.93%",
  },
  maskGroup49: {
    height: "35.58%",
    width: "85.97%",
    top: "44.19%",
    right: "7.1%",
    bottom: "20.23%",
    left: "6.92%",
    position: "absolute",
  },
  splashScreen4Item: {
    top: 109,
    left: 67,
    width: 263,
    height: 232,
    position: "absolute",
  },
  vectorIcon1: {
    top: 767,
    left: 173,
  },
  splashScreen4Icon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default SplashScreen;
