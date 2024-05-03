import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SplashScreen3 = () => {
  return (
    <ImageBackground
      style={styles.splashScreen1Icon}
      resizeMode="cover"
      source={require("../assets/coursesscreen.png")}
    >
      <Image
        style={styles.pepiconsPopLineX3}
        contentFit="cover"
        source={require("../assets/pepiconspoplinex-3.png")}
      />
      <Text style={styles.studySync}>STUDY SYNC</Text>
      <Text style={[styles.text, styles.textTypo]}>{` `}</Text>
      <Image
        style={[styles.splashScreen1Child, styles.splashScreen1ChildLayout]}
        contentFit="cover"
        source={require("../assets/group-9.png")}
      />
      <Text
        style={[styles.exploreAVast, styles.skip2Typo]}
      >{`Explore a vast array of courses right at your fingertips.
. `}</Text>
      <View style={styles.maskGroup51}>
        <View style={styles.skipPosition}>
          <View style={styles.skipPosition}>
            <Image
              style={[styles.skipBackgroundIcon, styles.skipPosition]}
              contentFit="cover"
              source={require("../assets/skip-background1.png")}
            />
            <Text style={[styles.skip2, styles.skip2Typo]}>Skip</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.splashScreen1Item, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-94.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
  },
  splashScreen1ChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  skip2Typo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  skipPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textPosition: {
    left: 36,
    position: "absolute",
  },
  pepiconsPopLineX3: {
    marginLeft: -67,
    top: 800,
    width: 133,
    height: 63,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  studySync: {
    marginLeft: -118,
    top: 487,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.irishGroverRegular,
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  text: {
    top: 535,
    fontFamily: FontFamily.pottaOneRegular,
    left: 36,
    position: "absolute",
    textAlign: "left",
  },
  splashScreen1Child: {
    height: "3.32%",
    width: "26.15%",
    top: "88.63%",
    right: "31.03%",
    bottom: "8.06%",
    left: "42.82%",
    position: "absolute",
  },
  exploreAVast: {
    marginLeft: -143,
    top: 563,
    width: 317,
    height: 76,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    left: "50%",
  },
  skipBackgroundIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  skip2: {
    height: "52.75%",
    width: "64.43%",
    top: "30.04%",
    left: "18.38%",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  maskGroup51: {
    height: "3.23%",
    width: "12.97%",
    top: "6.87%",
    right: "7.95%",
    bottom: "89.89%",
    left: "79.08%",
    position: "absolute",
  },
  splashScreen1Item: {
    top: 129,
    width: 310,
    height: 247,
  },
  splashScreen1Icon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default SplashScreen3;
