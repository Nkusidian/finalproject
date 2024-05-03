import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const CoursesScreen = () => {
  return (
    <ImageBackground
      style={styles.coursesScreenIcon}
      resizeMode="cover"
      source={require("../assets/coursesscreen.png")}
    >
      <Image
        style={styles.pepiconsPopLineX3}
        contentFit="cover"
        source={require("../assets/pepiconspoplinex-3.png")}
      />
      <View style={styles.coursesScreenChild} />
      <Text style={[styles.findACourse, styles.myCoursesFlexBox]}>
        Find a course
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.myCourses, styles.myCoursesFlexBox]}>
        My Courses
      </Text>
      <Image
        style={styles.iconParkSolidBack1}
        contentFit="cover"
        source={require("../assets/iconparksolidback-1.png")}
      />
      <View style={styles.coursesScreenInner}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/rectangle-15.png")}
          />
          <View style={[styles.parent, styles.parentLayout]}>
            <Text style={styles.text}>65%</Text>
            <Text style={styles.progress}>Progress</Text>
            <Text style={[styles.cybersecurity, styles.cybersecurityTypo]}>
              Cybersecurity
            </Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/rectangle-18.png")}
            />
            <Image
              style={styles.vaadinProgressbar1Icon}
              contentFit="cover"
              source={require("../assets/vaadinprogressbar-1.png")}
            />
          </View>
          <View style={[styles.group, styles.groupPosition]}>
            <Text style={styles.text}>65%</Text>
            <Text style={styles.progress}>Progress</Text>
            <Text style={[styles.cybersecurity, styles.cybersecurityTypo]}>
              NETWORKING
            </Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/rectangle-21.png")}
            />
            <Image
              style={styles.vaadinProgressbar1Icon}
              contentFit="cover"
              source={require("../assets/vaadinprogressbar-1.png")}
            />
          </View>
          <View style={[styles.container, styles.parentLayout]}>
            <Text style={styles.text}>65%</Text>
            <Text style={styles.progress}>Progress</Text>
            <Text style={[styles.cybersecurity, styles.cybersecurityTypo]}>
              Project Management
            </Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/rectangle-22.png")}
            />
            <Image
              style={styles.vaadinProgressbar1Icon}
              contentFit="cover"
              source={require("../assets/vaadinprogressbar-1.png")}
            />
          </View>
          <View style={[styles.groupView, styles.groupPosition]}>
            <Text style={styles.text}>65%</Text>
            <Image
              style={styles.vaadinProgressbar1Icon}
              contentFit="cover"
              source={require("../assets/vaadinprogressbar-1.png")}
            />
            <Text style={styles.progress}>Progress</Text>
            <Text
              style={[styles.researchMethodology, styles.cybersecurityTypo]}
            >
              Research Methodology
            </Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/rectangle-21.png")}
            />
          </View>
          <View style={[styles.parent1, styles.parentPosition]}>
            <Text style={styles.text}>65%</Text>
            <Image
              style={styles.vaadinProgressbar1Icon}
              contentFit="cover"
              source={require("../assets/vaadinprogressbar-1.png")}
            />
            <Text style={styles.progress}>Progress</Text>
            <Text
              style={[styles.researchMethodology, styles.cybersecurityTypo]}
            >
              Research Methodology
            </Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/rectangle-21.png")}
            />
          </View>
          <View style={[styles.parent2, styles.parentPosition]}>
            <Text style={styles.text}>65%</Text>
            <Image
              style={styles.vaadinProgressbar1Icon}
              contentFit="cover"
              source={require("../assets/vaadinprogressbar-1.png")}
            />
            <Text style={styles.progress}>Progress</Text>
            <Text
              style={[styles.researchMethodology, styles.cybersecurityTypo]}
            >
              Research Methodology
            </Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/rectangle-21.png")}
            />
          </View>
          <View style={[styles.parent3, styles.parentLayout]}>
            <Text style={styles.text}>65%</Text>
            <Text style={styles.progress}>Progress</Text>
            <Text style={[styles.cybersecurity, styles.cybersecurityTypo]}>
              NETWORKING
            </Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/rectangle-21.png")}
            />
            <Image
              style={styles.vaadinProgressbar1Icon}
              contentFit="cover"
              source={require("../assets/vaadinprogressbar-1.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.coursesScreenItem}
        contentFit="cover"
        source={require("../assets/group-36.png")}
      />
      <Image
        style={styles.profileImageZoom1347SvgrepIcon}
        contentFit="cover"
        source={require("../assets/profileimagezoom1347svgrepocom-1.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  myCoursesFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  parentLayout: {
    height: 154,
    width: 150,
    position: "absolute",
  },
  cybersecurityTypo: {
    fontSize: FontSize.size_sm,
    top: 100,
    fontFamily: FontFamily.inika,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupPosition: {
    top: 181,
    height: 154,
    width: 150,
    position: "absolute",
  },
  parentPosition: {
    top: 352,
    height: 154,
    width: 150,
    position: "absolute",
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
  coursesScreenChild: {
    left: 34,
    backgroundColor: Color.colorGainsboro,
    width: 322,
    height: 42,
    top: 129,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  findACourse: {
    left: 142,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.irishGroverRegular,
    color: Color.colorBlack,
    top: 139,
    textAlign: "left",
  },
  vectorIcon: {
    height: "2.84%",
    width: "6.41%",
    top: "16.23%",
    right: "82.56%",
    bottom: "80.92%",
    left: "11.03%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  myCourses: {
    top: 74,
    left: 128,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.inikaBold,
    color: Color.colorWhite,
  },
  iconParkSolidBack1: {
    top: 76,
    left: 22,
    width: 46,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    left: 0,
    top: 0,
    height: 719,
    width: 361,
    position: "absolute",
  },
  text: {
    left: 121,
    fontFamily: FontFamily.inderRegular,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.colorBlack,
    top: 139,
    position: "absolute",
  },
  progress: {
    fontFamily: FontFamily.inika,
    left: 11,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.colorBlack,
    top: 129,
    position: "absolute",
  },
  cybersecurity: {
    left: 12,
  },
  groupItem: {
    borderRadius: Border.br_xl,
    height: 100,
    width: 150,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vaadinProgressbar1Icon: {
    top: 137,
    width: 109,
    height: 17,
    left: 11,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
  parent: {
    left: 16,
    top: 10,
    height: 154,
  },
  group: {
    left: 192,
  },
  container: {
    left: 192,
    top: 10,
    height: 154,
  },
  researchMethodology: {
    left: 2,
  },
  groupView: {
    left: 16,
  },
  parent1: {
    left: 7,
  },
  parent2: {
    left: 192,
  },
  parent3: {
    top: 482,
    left: 18,
  },
  vectorParent: {
    height: 719,
    width: 361,
  },
  coursesScreenInner: {
    top: 362,
    left: 14,
    height: 352,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  coursesScreenItem: {
    top: 772,
    left: 30,
    width: 341,
    height: 37,
    position: "absolute",
  },
  profileImageZoom1347SvgrepIcon: {
    top: 17,
    left: 334,
    width: 43,
    height: 27,
    position: "absolute",
    overflow: "hidden",
  },
  coursesScreenIcon: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default CoursesScreen;
