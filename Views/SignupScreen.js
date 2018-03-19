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
import styles from './style';

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInputFirstName: "",
      TextInputLastName: "",
      TextInputEmail: "",
      TextPassword: "",
      TextInputPhoneNumber: ""
    };
  }

  InsertDataToServer = () => {
    const { TextInputFirstName } = this.state;
    const { TextInputLastName } = this.state;
    const { TextInputEmail } = this.state;
    const { TextPassword } = this.state;
    const { TextInputPhoneNumber } = this.state;

    fetch("https://tempool.000webhostapp.com/php/submit_user_info.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: TextInputFirstName,
        lastName: TextInputLastName,
        email: TextInputEmail,
        password: TextPassword,
        phoneNumber: TextInputPhoneNumber
      })
    })
      .then(response => console.log(response))
      .then(responseJson => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      })
      .catch(error => {
        console.error("error: " + error);
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
          placeholder="First Name"
          onChangeText={TextInputFirstName =>
            this.setState({ TextInputFirstName })
          }
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          onChangeText={TextInputLastName =>
            this.setState({ TextInputLastName })
          }
        />
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
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="Confirm Password"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
          onChangeText={TextInputPhoneNumber =>
            this.setState({ TextInputPhoneNumber })
          }
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            onPress={this.InsertDataToServer}
            color="darkred"
          />
        </View>
      </View>
    );
  }
}
