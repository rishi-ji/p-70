import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class WriteStory extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput style={styles.inputBox} placeholder="Story title" />
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputBox} placeholder="Author" />
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.input} placeholder="Write your story" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputView: {
    flexDirection: "row",
    margin: 20,
    borderRightWidth: 1.5,
  },
  inputBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 1.5,
    fontSize: 20,
  },

  input: {
    width: 400,
    height: 200,
    borderWidth: 1.5,
    borderRightWidth: 1.5,
    fontSize: 30,
    textAlign: "center",
  },
});
