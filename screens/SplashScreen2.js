import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const SplashScreen2 = () => {
  return (
    <ImageBackground
      style={styles.splashScreen2Icon}
      resizeMode="cover"
      source={require("../assets/coursesscreen.png")}
    >
      <Image
        style={styles.splashScreen2Child}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <View style={styles.teenyiconsChatSolid1} />
      <Image
        style={[styles.splashScreen2Item, styles.wiStars11Position]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <View style={styles.maskGroup50}>
        <View style={styles.text}>
          <Text
            style={[styles.easyAndFast, styles.easyFlexBox]}
          >{`Easy and fast learning at 
any time, any where to help you 
improve.`}</Text>
        </View>
        <View style={styles.title}>
          <Text
            style={[styles.quickAndEasy, styles.easyFlexBox]}
          >{`Quick and easy 
learning`}</Text>
        </View>
        <View style={[styles.skip, styles.skipPosition]}>
          <View style={[styles.skip1, styles.skipPosition]}>
            <Image
              style={styles.skipBackgroundIcon}
              contentFit="cover"
              source={require("../assets/skip-background.png")}
            />
            <Text style={styles.skip2}>Skip</Text>
          </View>
        </View>
        <Image
          style={styles.subtractIcon}
          contentFit="cover"
          source={require("../assets/subtract1.png")}
        />
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/frame-5.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/frame-5.png")}
        />
        <Image
          style={styles.fluentDiamond20Filled1Icon}
          contentFit="cover"
          source={require("../assets/fluentdiamond20filled-11.png")}
        />
      </View>
      <Image
        style={[styles.splashScreen2Inner, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-92.png")}
      />
      <Image
        style={[styles.wiStars11, styles.wiStars11Position]}
        contentFit="cover"
        source={require("../assets/wistars-1-1.png")}
      />
      <Image
        style={styles.mageLightBulb1Icon}
        contentFit="cover"
        source={require("../assets/magelightbulb-1.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-91.png")}
      />
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract1.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wiStars11Position: {
    left: 37,
    position: "absolute",
  },
  easyFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  skipPosition: {
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "11.43%",
    top: "14.29%",
    width: "24.53%",
    height: "74.29%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIconLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  splashScreen2Child: {
    top: 56,
    left: -10,
    width: 400,
    height: 186,
    position: "absolute",
  },
  teenyiconsChatSolid1: {
    top: 778,
    left: 129,
    width: 20,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  splashScreen2Item: {
    top: 397,
    width: 2,
    height: 6,
  },
  easyAndFast: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
  },
  text: {
    height: "14.23%",
    width: "86.12%",
    top: "85.77%",
    right: "2.47%",
    left: "11.41%",
    bottom: "0%",
    position: "absolute",
  },
  quickAndEasy: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray,
  },
  title: {
    height: "13.04%",
    width: "68.56%",
    top: "69.18%",
    right: "16.34%",
    bottom: "17.79%",
    left: "15.1%",
    position: "absolute",
  },
  skipBackgroundIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  skip2: {
    height: "52.44%",
    width: "64.52%",
    top: "29.94%",
    left: "18.55%",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  skip1: {
    right: "0%",
    left: "0%",
    height: "100%",
    top: "0%",
    bottom: "0%",
    width: "100%",
  },
  skip: {
    height: "7.9%",
    width: "13.74%",
    bottom: "92.1%",
    left: "86.26%",
    right: "0%",
  },
  subtractIcon: {
    width: 81,
    height: 201,
  },
  maskGroup50: {
    height: "70.62%",
    width: "92.56%",
    top: "6.64%",
    right: "5.13%",
    bottom: "22.75%",
    left: "2.31%",
    position: "absolute",
  },
  vectorIcon: {
    right: "75.47%",
    left: "0%",
  },
  vectorIcon1: {
    left: "75.47%",
    right: "0%",
  },
  fluentDiamond20Filled1Icon: {
    top: 0,
    left: 30,
    width: 25,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    height: "3.32%",
    width: "21.74%",
    top: "89.22%",
    right: "40.05%",
    bottom: "7.46%",
    left: "38.21%",
    position: "absolute",
  },
  splashScreen2Inner: {
    top: 128,
    left: 206,
    width: 179,
    height: 183,
  },
  wiStars11: {
    top: 77,
    width: 75,
    height: 72,
    overflow: "hidden",
  },
  mageLightBulb1Icon: {
    top: 152,
    left: 94,
    width: 45,
    height: 56,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    top: 276,
    left: 28,
    width: 167,
    height: 180,
  },
  splashScreen2Icon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default SplashScreen2;
