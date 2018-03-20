import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  bigblue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  },
  background: {
    width,
    height
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
  },
  textInputFalse: {
    //
    height: 30, //
    margin: 5, //
    borderWidth: 1,
    backgroundColor: "lightgray", //
    borderColor: "#000", //
    color: "gray"
  },
  container: {
    flex: 1
  },
  markWrap: {
    flex: 1,
    paddingVertical: 60
  },
  mark: {
    width: null,
    height: null,
    flex: 1
  },
  background: {
    width,
    height
  },
  wrapper: {
    paddingVertical: 30
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    height: 20,
    width: 20
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    fontSize: 18,
    paddingRight: 15
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  accountText: {
    color: "#D8D8D8",
    fontSize: 18
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5
  }
});
