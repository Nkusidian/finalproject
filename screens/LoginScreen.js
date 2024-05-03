import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const LoginScreen = () => {
  return (
    <ImageBackground
      style={styles.loginScreenIcon}
      resizeMode="cover"
      source={require("../assets/coursesscreen.png")}
    >
      <Image
        style={styles.loginScreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Image
        style={styles.loginScreenItem}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Text style={styles.logIn}>Log In</Text>
      <View style={styles.bg}>
        <Image
          style={[styles.bgIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <View style={[styles.text, styles.textPosition]}>
          <Text style={[styles.orLoginWith, styles.orLoginWithTypo]}>
            Or login with
          </Text>
          <Image
            style={[styles.textChild, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/vector-1.png")}
          />
          <Image
            style={[styles.textItem, styles.textLayout]}
            contentFit="cover"
            source={require("../assets/vector-11.png")}
          />
        </View>
        <View style={styles.text1}>
          <Text style={[styles.dontHaveAnContainer, styles.orLoginWithTypo]}>
            <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
            <Text style={styles.signUp}>Sign up</Text>
          </Text>
        </View>
        <View style={[styles.button, styles.textPosition]}>
          <View style={[styles.buttonprimary, styles.bgIconPosition]}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/buttonprimary-background.png")}
            />
            <View style={styles.logInWrapper}>
              <Text style={styles.logIn1}>Log In</Text>
            </View>
          </View>
        </View>
        <View style={styles.text2}>
          <Text style={[styles.forgetPassword, styles.passwordTypo]}>
            Forget password?
          </Text>
        </View>
        <View style={[styles.password, styles.emailPosition]}>
          <View style={[styles.buttonprimary, styles.bgIconPosition]}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/formpassword-background.png")}
            />
            <Image
              style={styles.iconPosition}
              contentFit="cover"
              source={require("../assets/bg1.png")}
            />
            <View style={[styles.title, styles.titlePosition]}>
              <Text style={[styles.password1, styles.passwordTypo]}>
                Password
              </Text>
            </View>
            <Image
              style={[styles.iconpreviewCloseOne, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/iconpreviewcloseone.png")}
            />
          </View>
        </View>
        <View style={[styles.email, styles.emailPosition]}>
          <View style={[styles.buttonprimary, styles.bgIconPosition]}>
            <Image
              style={[styles.bgIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/formpassword-background.png")}
            />
            <Image
              style={[styles.bgIcon2, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/bg2.png")}
            />
            <View style={styles.email1}>
              <Text style={[styles.cooperKristingmailcom, styles.passwordTypo]}>
                Cooper_Kristin@gmail.com
              </Text>
            </View>
            <View style={[styles.title1, styles.titlePosition]}>
              <Text style={[styles.password1, styles.passwordTypo]}>
                Your Email
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.platformgoogleShapeoriginaIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/platformgoogle-shapeoriginal-coloredtrue.png")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    left: "6.4%",
    width: "87.2%",
    right: "6.4%",
    position: "absolute",
  },
  orLoginWithTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    top: "0%",
    height: "100%",
    textAlign: "left",
    position: "absolute",
  },
  textLayout: {
    bottom: "58.14%",
    top: "38.95%",
    height: "2.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  bgIconPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  passwordTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
    top: "0%",
    height: "100%",
    textAlign: "left",
    position: "absolute",
    width: "100%",
  },
  emailPosition: {
    height: "11.03%",
    left: "6.4%",
    right: "6.4%",
    width: "87.2%",
    position: "absolute",
  },
  titlePosition: {
    bottom: "69.58%",
    top: "1.31%",
    height: "29.11%",
    left: "0%",
    position: "absolute",
  },
  iconPosition: {
    top: "30.57%",
    height: "69.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  loginScreenChild: {
    top: 56,
    left: -10,
    width: 400,
    height: 186,
    position: "absolute",
  },
  loginScreenItem: {
    top: 397,
    left: 37,
    width: 2,
    height: 6,
    position: "absolute",
  },
  logIn: {
    top: 96,
    left: 118,
    fontSize: 48,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  bgIcon: {
    borderRadius: Border.br_xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  orLoginWith: {
    width: "22.94%",
    left: "38.59%",
    color: Color.colorLightsteelblue,
  },
  textChild: {
    width: "31.65%",
    right: "68.35%",
    left: "0%",
  },
  textItem: {
    width: "31.5%",
    left: "68.5%",
    right: "0%",
    top: "38.95%",
    height: "2.91%",
  },
  text: {
    top: "54.21%",
    bottom: "43.03%",
    height: "2.76%",
  },
  dontHaveAn: {
    color: Color.colorLightsteelblue,
  },
  signUp: {
    color: Color.colorMediumslateblue,
  },
  dontHaveAnContainer: {
    left: "0%",
    width: "100%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
  },
  text1: {
    width: "50.93%",
    top: "47.93%",
    right: "24.48%",
    bottom: "49.31%",
    left: "24.59%",
    height: "2.76%",
    position: "absolute",
  },
  logIn1: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    left: "0%",
    top: "0%",
    height: "100%",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
    width: "100%",
  },
  logInWrapper: {
    height: "48.01%",
    width: "14.37%",
    top: "28.09%",
    right: "42.81%",
    bottom: "23.9%",
    left: "42.81%",
    position: "absolute",
  },
  buttonprimary: {
    left: "0%",
    position: "absolute",
  },
  button: {
    height: "7.66%",
    top: "36.29%",
    bottom: "56.05%",
  },
  forgetPassword: {
    color: Color.colorLightsteelblue,
  },
  text2: {
    height: "3.21%",
    width: "33.33%",
    top: "31.09%",
    bottom: "65.7%",
    left: "60.27%",
    right: "6.4%",
    position: "absolute",
  },
  password1: {
    color: Color.colorLightslategray,
  },
  title: {
    width: "20.8%",
    right: "79.2%",
  },
  iconpreviewCloseOne: {
    height: "23.14%",
    width: "5.6%",
    top: "53.71%",
    right: "7.61%",
    bottom: "23.14%",
    left: "86.79%",
  },
  password: {
    top: "18.07%",
    bottom: "70.9%",
  },
  bgIcon2: {
    borderRadius: Border.br_xl,
  },
  cooperKristingmailcom: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  email1: {
    width: "59.33%",
    top: "54.15%",
    right: "34.56%",
    bottom: "16.74%",
    left: "6.12%",
    height: "29.11%",
    position: "absolute",
  },
  title1: {
    width: "23.55%",
    right: "76.45%",
  },
  email: {
    top: "3.37%",
    bottom: "85.6%",
  },
  platformgoogleShapeoriginaIcon: {
    height: "7.7%",
    width: "12.8%",
    top: "61%",
    right: "43.73%",
    bottom: "31.3%",
    left: "43.47%",
  },
  bg: {
    height: "73.82%",
    width: "96.15%",
    top: "22.27%",
    right: "1.79%",
    bottom: "3.91%",
    left: "2.05%",
    position: "absolute",
  },
  loginScreenIcon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginScreen;
