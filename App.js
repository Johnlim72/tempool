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
            onPress={() => this.props.navigation.navigate("Dashboard")}
            color="darkred"
          />
        </View>
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
          {this.state.TextInputEmail}
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

class DashboardScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={styles.buttonContainer}>
          <Button
            title="Find a Ride"
            onPress={() => this.props.navigation.navigate("Login")}
            color="darkred"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Profile"
            onPress={() => this.props.navigation.navigate("Profile")}
            color="darkred"
          />
        </View>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
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

  UpdateDataToServer = () => {
    const { TextInputFirstName } = this.state;
    const { TextInputLastName } = this.state;
    const { TextInputEmail } = this.state;
    const { TextPassword } = this.state;
    const { TextInputPhoneNumber } = this.state;

    fetch("", {
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
          placeholder="Phone Number"
          onChangeText={TextInputPhoneNumber =>
            this.setState({ TextInputPhoneNumber })
          }
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Save"
            onPress={
              (() => this.props.navigation.navigate("Login"),
              this.UpdateDataToServer)
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
    },
    Dashboard: {
      screen: DashboardScreen
    },
    Profile: {
      screen: ProfileScreen
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

validateTempleEmail(email) {
  domain = email.substring(email.length - 10, email);

  if(domain.toLowerCase() === "temple.edu") {
    return true;
  } else {
    return false;
  }
}

AppRegistry.registerComponent("App", () => App);
