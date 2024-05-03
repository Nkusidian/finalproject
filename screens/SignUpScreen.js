import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const SignUpScreen = () => {
  return (
    <ImageBackground
      style={styles.signupScreenIcon}
      resizeMode="cover"
      source={require("../assets/coursesscreen.png")}
    >
      <Image
        style={styles.signupScreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Image
        style={styles.signupScreenItem}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <View style={styles.maskGroup23}>
        <View style={styles.bg}>
          <Image
            style={[styles.bgChild, styles.bgChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-8.png")}
          />
          <View style={[styles.password, styles.text1Position]}>
            <View style={[styles.formpassword, styles.text2Position]}>
              <Image
                style={[styles.bgChild, styles.bgChildLayout]}
                contentFit="cover"
                source={require("../assets/formpassword-background1.png")}
              />
              <Image
                style={styles.iconPosition}
                contentFit="cover"
                source={require("../assets/bg3.png")}
              />
              <View style={[styles.title, styles.titlePosition]}>
                <Text
                  style={[styles.confirmPassword, styles.creatAccountPosition]}
                >
                  Confirm Password
                </Text>
              </View>
              <Image
                style={[styles.iconpreviewCloseOne, styles.bgChildLayout]}
                contentFit="cover"
                source={require("../assets/iconpreviewcloseone1.png")}
              />
            </View>
          </View>
          <View style={[styles.formemail, styles.buttonPosition]}>
            <Image
              style={[styles.bgChild, styles.bgChildLayout]}
              contentFit="cover"
              source={require("../assets/formemail-background.png")}
            />
            <Image
              style={[styles.bgIcon1, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/bg3.png")}
            />
            <Image
              style={[styles.iconcheck, styles.bgChildLayout]}
              contentFit="cover"
              source={require("../assets/iconcheck.png")}
            />
            <View style={styles.email}>
              <Text style={[styles.cooperKristingmailcom, styles.signUpClr]}>
                Cooper_Kristin@gmail.com
              </Text>
            </View>
            <View style={[styles.formpassword, styles.text2Position]}>
              <Image
                style={[styles.bgChild, styles.bgChildLayout]}
                contentFit="cover"
                source={require("../assets/formemail-background.png")}
              />
              <Image
                style={[styles.bgIcon1, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/bg3.png")}
              />
              <Image
                style={[styles.iconcheck, styles.bgChildLayout]}
                contentFit="cover"
                source={require("../assets/iconcheck.png")}
              />
              <View style={[styles.title1, styles.titlePosition]}>
                <Text
                  style={[styles.confirmPassword, styles.creatAccountPosition]}
                >
                  Full Names
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.email1, styles.text1Position]}>
            <View style={[styles.formpassword, styles.text2Position]}>
              <Image
                style={[styles.bgChild, styles.bgChildLayout]}
                contentFit="cover"
                source={require("../assets/formemail-background.png")}
              />
              <Image
                style={[styles.bgIcon1, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/bg3.png")}
              />
              <Image
                style={[styles.iconcheck, styles.bgChildLayout]}
                contentFit="cover"
                source={require("../assets/iconcheck.png")}
              />
              <View style={[styles.title2, styles.titlePosition]}>
                <Text
                  style={[styles.confirmPassword, styles.creatAccountPosition]}
                >
                  Reg Number
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.text}>
          <Text
            style={[styles.alreadyHaveAn, styles.creatAccountPosition]}
          >{`Already have an account？ `}</Text>
          <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
        </View>
        <View style={[styles.text1, styles.text1Position]}>
          <View style={[styles.text2, styles.text2Position]}>
            <Text
              style={[styles.alreadyHaveAn, styles.creatAccountPosition]}
            >{`By creating an account you have to agree
with our them & condication.`}</Text>
          </View>
          <Image
            style={[styles.elementscheckboxoffIcon, styles.bgChildLayout]}
            contentFit="cover"
            source={require("../assets/elementscheckboxoff.png")}
          />
        </View>
        <View style={[styles.button, styles.buttonPosition]}>
          <View style={[styles.formpassword, styles.text2Position]}>
            <Image
              style={[styles.bgChild, styles.bgChildLayout]}
              contentFit="cover"
              source={require("../assets/buttonprimary-background1.png")}
            />
            <View style={styles.creatAccountWrapper}>
              <Text style={[styles.creatAccount, styles.signUpClr]}>
                Creat account
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.password1, styles.email2Position]}>
          <View style={[styles.formpassword, styles.text2Position]}>
            <Image
              style={[styles.bgChild, styles.bgChildLayout]}
              contentFit="cover"
              source={require("../assets/formemail-background.png")}
            />
            <Image
              style={styles.iconPosition}
              contentFit="cover"
              source={require("../assets/bg3.png")}
            />
            <View style={[styles.title3, styles.titlePosition]}>
              <Text
                style={[styles.confirmPassword, styles.creatAccountPosition]}
              >
                Password
              </Text>
            </View>
            <Image
              style={[styles.iconpreviewCloseOne, styles.bgChildLayout]}
              contentFit="cover"
              source={require("../assets/iconpreviewcloseone1.png")}
            />
          </View>
        </View>
        <View style={[styles.email2, styles.email2Position]}>
          <View style={[styles.formpassword, styles.text2Position]}>
            <Image
              style={[styles.bgChild, styles.bgChildLayout]}
              contentFit="cover"
              source={require("../assets/formemail-background.png")}
            />
            <Image
              style={[styles.bgIcon1, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/bg3.png")}
            />
            <Image
              style={[styles.iconcheck, styles.bgChildLayout]}
              contentFit="cover"
              source={require("../assets/iconcheck.png")}
            />
            <View style={styles.email}>
              <Text style={[styles.cooperKristingmailcom, styles.signUpClr]}>
                Cooper_Kristin@gmail.com
              </Text>
            </View>
            <View style={[styles.title1, styles.titlePosition]}>
              <Text
                style={[styles.confirmPassword, styles.creatAccountPosition]}
              >
                Your Email
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.title5}>
          <Text style={[styles.signUp, styles.logInTypo]}>Sign Up</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Position: {
    left: "6.4%",
    position: "absolute",
  },
  text2Position: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    right: "0%",
  },
  titlePosition: {
    bottom: "69.44%",
    top: "1.39%",
    height: "29.17%",
    left: "0%",
    position: "absolute",
  },
  creatAccountPosition: {
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  buttonPosition: {
    left: "6.67%",
    right: "6.13%",
    width: "87.2%",
    position: "absolute",
  },
  iconPosition: {
    top: "30.56%",
    height: "69.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  signUpClr: {
    color: Color.colorWhite,
    left: "0%",
  },
  logInTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  email2Position: {
    height: "9.9%",
    left: "6.4%",
    right: "6.4%",
    width: "87.2%",
    position: "absolute",
  },
  signupScreenChild: {
    top: 56,
    left: -10,
    width: 400,
    height: 186,
    position: "absolute",
  },
  signupScreenItem: {
    top: 397,
    left: 37,
    width: 2,
    height: 6,
    position: "absolute",
  },
  bgChild: {
    borderRadius: Border.br_xl,
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  confirmPassword: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: "0%",
  },
  title: {
    width: "39.14%",
    right: "60.86%",
  },
  iconpreviewCloseOne: {
    height: "23.19%",
    width: "5.6%",
    top: "53.75%",
    right: "7.61%",
    bottom: "23.06%",
    left: "86.79%",
  },
  formpassword: {
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  password: {
    top: "56.81%",
    bottom: "32.16%",
    right: "6.4%",
    width: "87.2%",
    left: "6.4%",
    height: "11.03%",
  },
  bgIcon1: {
    borderRadius: Border.br_xl,
  },
  iconcheck: {
    height: "13.89%",
    width: "4.34%",
    top: "58.33%",
    right: "8.1%",
    bottom: "27.78%",
    left: "87.55%",
  },
  cooperKristingmailcom: {
    textAlign: "left",
    top: "0%",
    position: "absolute",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
  },
  email: {
    width: "59.33%",
    top: "54.17%",
    right: "34.56%",
    bottom: "16.67%",
    left: "6.12%",
    height: "29.17%",
    position: "absolute",
  },
  title1: {
    width: "23.55%",
    right: "76.45%",
  },
  formemail: {
    top: "17.92%",
    bottom: "71.06%",
    height: "11.03%",
    right: "6.13%",
  },
  title2: {
    width: "26.61%",
    right: "73.39%",
  },
  email1: {
    top: "6.13%",
    bottom: "82.85%",
    right: "6.4%",
    width: "87.2%",
    left: "6.4%",
    height: "11.03%",
  },
  bg: {
    height: "89.82%",
    top: "10.18%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  alreadyHaveAn: {
    color: Color.colorLightsteelblue,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    left: "0%",
  },
  logIn: {
    left: "83.02%",
    textDecoration: "underline",
    color: Color.colorMediumslateblue,
    fontSize: FontSize.size_xs,
  },
  text: {
    height: "2.48%",
    width: "56.53%",
    top: "90.65%",
    right: "17.33%",
    bottom: "6.88%",
    left: "26.13%",
    position: "absolute",
  },
  text2: {
    width: "91.67%",
    left: "8.33%",
    top: "0%",
    position: "absolute",
  },
  elementscheckboxoffIcon: {
    height: "44.44%",
    width: "5.8%",
    top: "2.78%",
    right: "94.2%",
    bottom: "52.78%",
    left: "0%",
  },
  text1: {
    height: "4.95%",
    width: "73.6%",
    top: "82.53%",
    right: "20%",
    bottom: "12.52%",
  },
  creatAccount: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  creatAccountWrapper: {
    height: "48%",
    width: "35.78%",
    top: "28%",
    right: "32.02%",
    bottom: "24%",
    left: "32.2%",
    position: "absolute",
  },
  button: {
    height: "6.88%",
    top: "72.49%",
    bottom: "20.63%",
  },
  title3: {
    width: "20.8%",
    right: "79.2%",
  },
  password1: {
    top: "49.66%",
    bottom: "40.44%",
  },
  email2: {
    top: "37.83%",
    bottom: "52.27%",
  },
  signUp: {
    fontSize: FontSize.size_21xl,
    color: Color.colorWhite,
    left: "0%",
    width: "100%",
  },
  title5: {
    height: "8.25%",
    width: "44.53%",
    right: "30.4%",
    bottom: "91.75%",
    left: "25.07%",
    top: "0%",
    position: "absolute",
  },
  maskGroup23: {
    height: "86.14%",
    width: "96.15%",
    top: "10.9%",
    right: "2.05%",
    bottom: "2.96%",
    left: "1.79%",
    position: "absolute",
  },
  signupScreenIcon: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUpScreen;
