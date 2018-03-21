import React from "react";
import {
  AppRegistry,
  Alert,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Button,
  View,
  Text,
  TextInput
} from "react-native";
import { StackNavigator } from "react-navigation"; // Version can be specified in package.json
import styles from "./style";
import { Switch } from "react-native-switch";

const { width, height } = Dimensions.get("window");
const background = require("./login3_bg.jpg");

export default class DashboardScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();

    this.state = {
      SwitchOnValueHolder: true
    };
  }

  ShowAlert = value => {
    this.setState({
      SwitchOnValueHolder: value
    });

    if (value == true) {
      //Perform any task here which you want to execute on Switch ON event.
      Alert.alert("Rider status selected.");
    } else {
      //Perform any task here which you want to execute on Switch OFF event.
      Alert.alert("Driver status selected.");
    }
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground
          source={background}
          style={styles.background}
          resizeMode="cover"
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              marginTop: 20
            }}
          >
            <View
              style={{
                flex: 1,
                paddingHorizontal: 50,
                paddingTop: 10,
                borderRadius: 10,
                backgroundColor: "white"
              }}
            >
              <Text
                style={{
                  color: "darkred",
                  fontFamily: "Futura",
                  fontSize: 30,
                  paddingBottom: 10
                }}
              >
                Dashboard
              </Text>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Switch
                  onValueChange={value => this.ShowAlert(value)}
                  activeText={"Rider"}
                  inActiveText={"Driver"}
                  disabled={false}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={3}
                  backgroundActive={"darkred"}
                  backgroundInactive={"#003399"}
                  circleActiveColor={"#cc0000"}
                  circleInActiveColor={"#1a75ff"}
                  style={{ transform: [{ scaleX: 10 }, { scaleY: 0.8 }] }}
                  value={this.state.SwitchOnValueHolder}
                />
              </View>
            </View>
          </View>
          <View style={{ flex: 5, marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Initial")}
              activeOpacity={0.5}
            >
              <View style={styles.buttonContainer}>
                <Button
                  title="Find a Ride"
                  onPress={() => this.props.navigation.navigate("Initial")}
                  color="darkred"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Schedule")}
              activeOpacity={0.5}
            >
              <View style={styles.buttonContainer}>
                <Button
                  title="Schedule a Ride"
                  onPress={() => this.props.navigation.navigate("Schedule")}
                  color="darkred"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Profile", {
                  Email: this.props.navigation.state.params.Email
                })
              }
              activeOpacity={0.5}
            >
              <View style={styles.buttonContainer}>
                <Button
                  title="Profile"
                  onPress={() =>
                    this.props.navigation.navigate("Profile", {
                      Email: this.props.navigation.state.params.Email
                    })
                  }
                  color="darkred"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Initial")}
              activeOpacity={0.5}
            >
              <View style={styles.buttonContainer}>
                <Button
                  title="Logout"
                  onPress={() => this.props.navigation.navigate("Initial")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
