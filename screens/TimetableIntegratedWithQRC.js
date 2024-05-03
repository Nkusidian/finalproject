import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Color, Border } from "../GlobalStyles";

const TimetableIntegratedWithQRC = () => {
  return (
    <ImageBackground
      style={styles.timetableIntegratedWithQrC}
      resizeMode="cover"
      source={require("../assets/coursesscreen.png")}
    >
      <View style={styles.timetableIntegratedWithQrCChild} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  timetableIntegratedWithQrCChild: {
    position: "absolute",
    top: 214,
    left: 122,
    backgroundColor: Color.colorGainsboro,
    width: 138,
    height: 118,
  },
  timetableIntegratedWithQrC: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default TimetableIntegratedWithQRC;
