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
import InitialScreen from './Views/InitialScreen';
import CredentialsScreen from './Views/CredentialsScreen';
import LoginScreen from './Views/LoginScreen';
import SignupScreen from './Views/SignupScreen';
import DashboardScreen from './Views/DashboardScreen';
import ProfileScreen from './Views/ProfileScreen';
import styles from './Views/style';



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

validateTempleEmail(email) {
  domain = email.substring(email.length - 10, email.length);
  if(domain.toLowerCase() === "temple.edu") {
    return true;
  } else {
    return false;
  }
}

AppRegistry.registerComponent("App", () => App);
