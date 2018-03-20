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

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInputEmail: "",
      TextPassword: ""
    };
  }

  UserLoginFunction = () => {
    const { TextInputEmail } = this.state;
    const { TextPassword } = this.state;

    fetch("https://tempool.000webhostapp.com/php/login.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: TextInputEmail,
        password: TextPassword
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        // If server response message same as Data Matched
        if (responseJson === "Data Matched") {
          //Then open Profile activity and send user email to profile activity.
          this.props.navigation.navigate("Dashboard", {
            Email: TextInputEmail
          });
          console.log(responseJson);
        } else {
          Alert.alert(responseJson);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "darkred",
          justifyContent: "center"
        }}
      >
        <TextInput
          style={styles.textInput}
          placeholder="TU Email"
          onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry={true} //does the *** thing
          placeholder="Password"
          onChangeText={TextPassword => this.setState({ TextPassword })}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            onPress={this.UserLoginFunction}
            color="darkred"
          />
        </View>
      </View>
    );
  }
}
