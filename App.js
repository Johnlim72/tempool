import React, { Component } from "react";
import { StyleSheet, Button, Alert, Text, View, Image } from "react-native";
//stanley was here
class Greeting extends React.Component {
  render() {
    return <Text>Hello {this.props.name}!</Text>;
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : " ";
    return <Text>{display}</Text>;
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };

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
              onPress={() => {
                Alert.alert("Welcome to TemPool!");
              }}
              title="Start"
              color="black"
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
