import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Timer from "./components/Timer";
import AppBar from "./components/AppBar";
interface Props {
  isLoggedIn?: boolean;
}

interface State {
  isLoggedIn: boolean;
}
export default class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  render() {
    console.log("Tag", " I am render method");
    return (
      <View>
        <AppBar />
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
  }
});
