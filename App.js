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

class InitialScreen extends React.Component {
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

        {/*<Image source={pic} style={{width: 193, height: 110}}/>
  		   <Blink text='My name is John Lim blinking'/>
  		   <Greeting name= "John" /> */}
      </View>
    );
  }
}

class CredentialsScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "darkred"
        }}
      >
        <Text style={{ color: "darkred" }}>Credentials Screen</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Login"
            onPress={() => this.props.navigation.navigate("Login")}
            color="darkred"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Sign Up"
            onPress={() => this.props.navigation.navigate("Signup")}
            color="darkred"
          />
        </View>
      </View>
    );
  }
}

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login Screen</Text>
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
        <Button
          title="Go to Sign up"
          onPress={() => this.props.navigation.navigate("Signup")}
        />
      </View>
    );
  }
}

class SignupScreen extends React.Component {
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

    fetch("php/submit_user_info.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name: TextInputFirstName,
        last_name: TextInputLastName,
        email: TextInputEmail,
        password: TextPassword,
        phone_number: TextInputPhoneNumber
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
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
            onPress={
              (() => this.props.navigation.navigate("Login"),
              this.InsertDataToServer)
            }
            color="darkred"
          />
        </View>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Initial: {
      screen: InitialScreen
    },
    Credentials: {
      screen: CredentialsScreen
    },
    Login: {
      screen: LoginScreen
    },
    Signup: {
      screen: SignupScreen
    }
  },
  {
    initialRouteName: "Initial"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  bigblue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  },
  bigred: {
    color: "red",
    fontSize: 30
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 20
  },
  textInput: {
    //
    height: 30, //
    margin: 5, //
    borderWidth: 1,
    backgroundColor: "lightgray", //
    borderColor: "#000" //
  }
});
