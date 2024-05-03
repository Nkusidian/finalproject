import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SplashScreen1 = () => {
  return (
    <ImageBackground
      style={styles.splashScreen3Icon}
      resizeMode="cover"
      source={require("../assets/coursesscreen.png")}
    >
      <Text style={[styles.transformIdleMoments, styles.knowledgeOnTheFlexBox]}>
        Transform Idle moments into learning opportunities.
      </Text>
      <Text
        style={[styles.knowledgeOnThe, styles.knowledgeOnTheFlexBox]}
      >{`Knowledge on the Go:
Your personal learning companion`}</Text>
      <Image
        style={styles.splashScreen3Child}
        contentFit="cover"
        source={require("../assets/rectangle-96.png")}
      />
      <View style={styles.splashScreen3Item} />
      <Text style={[styles.getStarted, styles.getStartedPosition]}>
        GET STARTED
      </Text>
      <Text style={[styles.alreadyHaveAn, styles.getStartedPosition]}>
        Already have an account? Sign in
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  knowledgeOnTheFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  getStartedPosition: {
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  transformIdleMoments: {
    height: "10.05%",
    width: "79.72%",
    top: "64.8%",
    left: "10.26%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
  },
  knowledgeOnThe: {
    height: "11.61%",
    width: "69.74%",
    top: "53.08%",
    left: "13.59%",
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray,
  },
  splashScreen3Child: {
    height: "29.74%",
    width: "87.18%",
    top: "15.28%",
    right: "6.92%",
    bottom: "54.98%",
    left: "5.9%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  splashScreen3Item: {
    height: "6.64%",
    marginLeft: -154,
    top: "85.31%",
    bottom: "8.06%",
    backgroundColor: Color.colorGainsboro,
    width: 308,
    left: "50%",
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  getStarted: {
    marginLeft: -94,
    top: 724,
    fontSize: 28,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: "#2659c0",
  },
  alreadyHaveAn: {
    marginLeft: -127,
    top: 814,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.openSansRegular,
    color: Color.colorWhite,
  },
  splashScreen3Icon: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default SplashScreen1;
