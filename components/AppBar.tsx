import React from "react";
import { ToolbarAndroid, StyleSheet } from "react-native";

export default function AppBar() {
  return (
    <ToolbarAndroid
      logo={require("./menu.png")}
      title="AwesomeApp"
      style={styles.bar}
      actions={[
        { title: "Settings", icon: require("./cod_logo.png"), show: "always" }
      ]}
    />
  );
}

const styles = StyleSheet.create({
  bar: {
    marginTop: 24,
    width: 400,
    backgroundColor: "#dfedfd",
    height: 50
  }
});
