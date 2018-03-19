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
import styles from "./style"

export default class InitialScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            flex: 2,
            backgroundColor: "lightgray",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "darkred",
              fontSize: 30
            }}
          >
            TemPool
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "darkred" }}>
          <View style={styles.buttonContainer}>
            <Button
              title="Start"
              onPress={() => this.props.navigation.navigate("Credentials")}
              color="darkred"
            />
          </View>
        </View>
      </View>
    );
  }
}
