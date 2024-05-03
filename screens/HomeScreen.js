import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <ImageBackground
      style={styles.homeScreenIcon}
      resizeMode="cover"
      source={require("../assets/homescreen.png")}
    >
      <Image
        style={styles.homeScreenChild}
        contentFit="cover"
        source={require("../assets/group-8.png")}
      />
      <Text style={[styles.hiLetsStartContainer, styles.studySyncFlexBox]}>
        <Text style={styles.hi}>{`Hiii
,`}</Text>
        <Text style={styles.letsStartLearning}>Let’s start learning</Text>
      </Text>
      <Text style={[styles.studySync, styles.studySyncFlexBox]}>
        STUDY SYNC
      </Text>
      <View style={styles.homeScreenItem} />
      <View style={styles.homeParent}>
        <View style={[styles.home, styles.homeLayout]}>
          <View style={[styles.homeChild, styles.homeLayout]} />
          <Image
            style={[styles.home1FillIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/home-1-fill.png")}
          />
          <Text style={styles.home1}>Home</Text>
        </View>
        <View style={[styles.notification, styles.homeLayout]}>
          <View style={[styles.homeChild, styles.homeLayout]} />
          <Text style={[styles.notifications, styles.courses1Typo]}>
            Notifications
          </Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={[styles.search, styles.homeLayout]}>
          <View style={[styles.homeChild, styles.homeLayout]} />
          <Image
            style={[styles.vectorStrokeIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector-stroke.png")}
          />
          <Text style={[styles.search1, styles.tasks1Typo]}>Search</Text>
        </View>
        <View style={[styles.courses, styles.homeLayout]}>
          <View style={[styles.homeChild, styles.homeLayout]} />
          <Image
            style={[styles.subtractIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/subtract.png")}
          />
          <Text style={[styles.courses1, styles.courses1Typo]}>Courses</Text>
        </View>
        <View style={[styles.tasks, styles.homeLayout]}>
          <View style={[styles.homeChild, styles.homeLayout]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Text style={[styles.tasks1, styles.tasks1Typo]}>Tasks</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  studySyncFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  homeLayout: {
    width: 78,
    top: 0,
    height: 78,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "27.69%",
    position: "absolute",
    overflow: "hidden",
  },
  courses1Typo: {
    top: "46.15%",
    height: "16.67%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  iconLayout: {
    top: "21.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "27.69%",
    position: "absolute",
    overflow: "hidden",
  },
  tasks1Typo: {
    top: "46.79%",
    height: "15.9%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  homeScreenChild: {
    top: 31,
    left: 316,
    width: 56,
    height: 49,
    position: "absolute",
  },
  hi: {
    fontSize: 17,
  },
  letsStartLearning: {
    fontSize: FontSize.size_base,
  },
  hiLetsStartContainer: {
    top: 80,
    left: 32,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
  },
  studySync: {
    marginLeft: -162.5,
    top: 45,
    left: "50%",
    fontSize: 15,
    fontFamily: FontFamily.irishGroverRegular,
    width: 114,
  },
  homeScreenItem: {
    top: 286,
    left: 7,
    backgroundColor: "#545eb9",
    width: 375,
    height: 180,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  homeChild: {
    backgroundColor: Color.colorDarkslategray,
    left: 0,
    width: 78,
    top: 0,
  },
  home1FillIcon: {
    right: "37.05%",
    left: "35.26%",
    bottom: "53.33%",
    top: "20.26%",
    height: "26.41%",
    maxWidth: "100%",
    width: "27.69%",
  },
  home1: {
    top: 36,
    left: 27,
    width: 24,
    height: 13,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  home: {
    left: 0,
    width: 78,
    top: 0,
  },
  notifications: {
    width: "76.92%",
    left: "11.54%",
  },
  vectorIcon: {
    height: "27.18%",
    right: "42.44%",
    bottom: "51.15%",
    left: "29.87%",
  },
  notification: {
    left: 234,
    top: 0,
    width: 78,
  },
  vectorStrokeIcon: {
    right: "40.64%",
    left: "31.67%",
    bottom: "53.33%",
    top: "20.26%",
    height: "26.41%",
    maxWidth: "100%",
    width: "27.69%",
  },
  search1: {
    width: "36.54%",
    left: "26.67%",
  },
  search: {
    left: 156,
    top: 0,
    width: 78,
  },
  subtractIcon: {
    height: "25.77%",
    right: "38.85%",
    bottom: "52.56%",
    left: "33.46%",
  },
  courses1: {
    width: "62.82%",
    left: "28.21%",
  },
  courses: {
    left: 78,
    top: 0,
    width: 78,
  },
  vectorIcon1: {
    height: "23.97%",
    top: "20.13%",
    right: "44.23%",
    bottom: "55.9%",
    left: "28.08%",
    maxWidth: "100%",
    width: "27.69%",
  },
  tasks1: {
    width: "28.97%",
    left: "26.79%",
  },
  tasks: {
    left: 312,
    top: 0,
    width: 78,
  },
  homeParent: {
    top: 748,
    left: -3,
    width: 390,
    height: 78,
    position: "absolute",
  },
  homeScreenIcon: {
    flex: 1,
    width: "100%",
    height: 826,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default HomeScreen;
