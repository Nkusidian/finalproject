import * as React from "react";
import { StyleSheet, View } from "react-native";

const Frame = () => {
  return <View style={styles.view} />;
};

const styles = StyleSheet.create({
  view: {
    width: 149,
    height: 165,
    overflow: "hidden",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
});

export default Frame;
