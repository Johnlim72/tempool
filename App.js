import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
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
                title="Go to Credentials"
                onPress={() => this.props.navigation.navigate("Credentials")}
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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Credentials Screen</Text>
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
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Signup Screen</Text>
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
    borderColor: "#fff"
  }
});
