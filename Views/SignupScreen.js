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
  
  validateTempleEmail(email) {
    domain = email.substring(email.length - 10, email.length);
    if(domain.toLowerCase() === "temple.edu") {
      return true;
    } else {
      return false;
    }
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
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson === "User successfully created.") {
          //Then open Profile activity and send user email to profile activity.

          Alert.alert(
            "Success!",
            "User created",
            [
              {
                text: "OK",
                onPress: () => this.props.navigation.navigate("Dashboard")
              }
            ],
            { cancelable: false }
          );
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
