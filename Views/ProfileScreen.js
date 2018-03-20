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

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInputFirstName: "",
      TextInputLastName: "",
      TextInputEmail: "",
      TextPassword: "",
      TextInputPhoneNumber: ""
    };

    const { TextInputFirstName } = "";
    const { TextInputLastName } = "";
    const { TextInputEmail } = "";
    const { TextPassword } = "";
    const { TextInputPhoneNumber } = "";

    fetch("https://tempool.000webhostapp.com/php/prepopulate.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: TextInputFirstName,
        lastName: TextInputLastName,
        email: this.props.navigation.state.params.Email,
        password: TextPassword,
        phoneNumber: TextInputPhoneNumber
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          TextInputFirstName: responseJson.firstName,
          TextInputLastName: responseJson.lastName,
          TextInputEmail: responseJson.email,
          TextPassword: responseJson.password,
          TextInputPhoneNumber: responseJson.phoneNumber
        });

        console.log(responseJson);
      })

      .catch(error => {
        console.error(error);
      });
  }

  UpdateDataToServer = () => {
    const { TextInputFirstName } = this.state;
    const { TextInputLastName } = this.state;
    const { TextInputEmail } = this.state;
    const { TextPassword } = this.state;
    const { TextInputPhoneNumber } = this.state;

    fetch("https://tempool.000webhostapp.com/php/update_user_info.php", {
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
        if (responseJson === "User successfully updated.") {
          //Then open Profile activity and send user email to profile activity.

          Alert.alert(
            "Success!",
            "User updated",
            [
              {
                text: "OK",
                onPress: () =>
                  this.props.navigation.navigate("Dashboard", {
                    Email: TextInputEmail
                  })
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
        <Text style={{ color: "white" }}>Profile</Text>
        <Text style={styles.TextComponentStyle}>
          {this.props.navigation.state.params.Email}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          defaultValue={this.state.TextInputFirstName}
          onChangeText={TextInputFirstName =>
            this.setState({ TextInputFirstName })
          }
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          defaultValue={this.state.TextInputLastName}
          onChangeText={TextInputLastName =>
            this.setState({ TextInputLastName })
          }
        />
        <TextInput
          style={styles.textInputFalse}
          placeholder="TU Email"
          defaultValue={this.state.TextInputEmail}
          editable = {false}
          onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry={true} //does the *** thing
          placeholder="Password"
          defaultValue={this.state.TextPassword}
          onChangeText={TextPassword => this.setState({ TextPassword })}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
          defaultValue={this.state.TextInputPhoneNumber}
          onChangeText={TextInputPhoneNumber =>
            this.setState({ TextInputPhoneNumber })
          }
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Save"
            onPress={this.UpdateDataToServer}
            color="darkred"
          />
        </View>
      </View>
    );
  }
}
