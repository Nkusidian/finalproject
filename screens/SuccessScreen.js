import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SuccessScreen = () => {
  return (
    <ImageBackground
      style={styles.successScreenIcon}
      resizeMode="cover"
      source={require("../assets/coursesscreen.png")}
    >
      <View style={styles.overlayParent}>
        <View style={[styles.overlay, styles.buttonPosition]}>
          <View style={[styles.frameWrapper, styles.successPosition]}>
            <View style={[styles.frameWrapper, styles.successPosition]}>
              <Image
                style={[styles.frameBackgroundIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/frame-background.png")}
              />
              <View style={styles.content}>
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/icon.png")}
                />
                <View style={styles.title}>
                  <Text style={[styles.success, styles.successFlexBox]}>
                    Success
                  </Text>
                </View>
                <View style={styles.text}>
                  <Text
                    style={[
                      styles.congratulationsYouHave,
                      styles.successPosition,
                    ]}
                  >{`Congratulations, you have completed 
your registration!`}</Text>
                </View>
                <View style={[styles.button, styles.buttonPosition]}>
                  <View style={[styles.frameWrapper, styles.successPosition]}>
                    <Image
                      style={[styles.frameBackgroundIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/buttonprimary-background2.png")}
                    />
                    <View style={styles.startLearningWrapper}>
                      <Text style={[styles.success, styles.successFlexBox]}>
                        Start Learning
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.studySync, styles.successFlexBox]}>
          STUDY SYNC
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  successPosition: {
    top: "0%",
    height: "100%",
    left: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  successFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  frameBackgroundIcon: {
    height: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  icon: {
    height: "29.5%",
    width: "24.71%",
    right: "37.65%",
    bottom: "70.5%",
    left: "37.65%",
  },
  success: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    top: "0%",
    height: "100%",
    left: "0%",
    width: "100%",
  },
  title: {
    height: "11.06%",
    width: "25.88%",
    top: "38.26%",
    right: "36.91%",
    bottom: "50.68%",
    left: "37.21%",
    position: "absolute",
  },
  congratulationsYouHave: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorLightsteelblue,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  text: {
    height: "16.61%",
    width: "89.2%",
    top: "53.46%",
    right: "5.4%",
    bottom: "29.93%",
    left: "5.4%",
    position: "absolute",
  },
  startLearningWrapper: {
    height: "47.97%",
    width: "43.65%",
    top: "26.1%",
    right: "28.18%",
    bottom: "25.93%",
    left: "28.18%",
    position: "absolute",
  },
  frameWrapper: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  button: {
    height: "23.06%",
    top: "76.94%",
  },
  content: {
    height: "72.08%",
    width: "88.99%",
    top: "5.32%",
    right: "2.76%",
    bottom: "22.59%",
    left: "8.25%",
    position: "absolute",
  },
  overlay: {
    height: "75.69%",
    top: "24.31%",
  },
  studySync: {
    marginLeft: -104.5,
    top: 0,
    left: "50%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.irishGroverRegular,
  },
  overlayParent: {
    height: "55.57%",
    width: "86.41%",
    top: "19.08%",
    right: "6.92%",
    bottom: "25.36%",
    left: "6.67%",
    position: "absolute",
  },
  successScreenIcon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default SuccessScreen;
