import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageBackground } from "react-native";
import { Border } from "../GlobalStyles";

const Course1Screen = () => {
  return (
    <ImageBackground
      style={styles.course1ScreenIcon}
      resizeMode="cover"
      source={require("../assets/coursesscreen.png")}
    >
      <Image
        style={[
          styles.iconamoonProfileCircleFill,
          styles.majesticonsHome1Layout,
        ]}
        contentFit="cover"
        source={require("../assets/iconamoonprofilecirclefill-1.png")}
      />
      <Image
        style={[
          styles.icRoundNotifications1Icon,
          styles.majesticonsHome1Layout,
        ]}
        contentFit="cover"
        source={require("../assets/icroundnotifications-1.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.majesticonsHome1, styles.majesticonsHome1Layout]}
        contentFit="cover"
        source={require("../assets/majesticonshome-1.png")}
      />
      <Image
        style={styles.teenyiconsChatSolid1}
        contentFit="cover"
        source={require("../assets/teenyiconschatsolid-1.png")}
      />
      <Image
        style={styles.pepiconsPopLineX3}
        contentFit="cover"
        source={require("../assets/pepiconspoplinex-3.png")}
      />
      <Image
        style={styles.course1ScreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-26.png")}
      />
      <Image
        style={styles.iconParkSolidBack1}
        contentFit="cover"
        source={require("../assets/iconparksolidback-1.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  majesticonsHome1Layout: {
    width: 45,
    position: "absolute",
    overflow: "hidden",
  },
  iconamoonProfileCircleFill: {
    top: 771,
    left: 320,
    height: 37,
  },
  icRoundNotifications1Icon: {
    top: 776,
    left: 177,
    height: 32,
  },
  vectorIcon: {
    height: "3.12%",
    width: "7.87%",
    top: "91.93%",
    right: "64.51%",
    bottom: "4.95%",
    left: "27.62%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  majesticonsHome1: {
    top: 772,
    left: 24,
    height: 33,
  },
  teenyiconsChatSolid1: {
    top: 778,
    left: 254,
    width: 38,
    height: 22,
    position: "absolute",
    overflow: "hidden",
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
  course1ScreenChild: {
    top: 0,
    left: 0,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: 150,
    width: 390,
    height: 219,
    position: "absolute",
  },
  iconParkSolidBack1: {
    top: 207,
    left: 16,
    width: 46,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  course1ScreenIcon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Course1Screen;
