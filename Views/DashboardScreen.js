import React from "react";
import {
  AppRegistry,
  Alert,
  StyleSheet,
  Button,
  View,
  Text,
  TextInput
} from "react-native";
import { StackNavigator } from "react-navigation"; // Version can be specified in package.json
import styles from "./style";

export default class DashboardScreen extends React.Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.TextComponentStyle}>
          {this.props.navigation.state.params.Email}
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Find a Ride"
            onPress={() => this.props.navigation.navigate("Login")}
            color="darkred"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Schedule a Ride"
            onPress={() => this.props.navigation.navigate("Login")}
            color="darkred"
          />
        </View>
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
        <View style={styles.buttonContainer}>
          <Button title="Logout" onPress={() => goBack(null)} />
        </View>
      </View>
    );
  }
}
