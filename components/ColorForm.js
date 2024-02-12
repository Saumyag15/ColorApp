import React, { useState, useRef } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function ColorForm({ onNewColor = f => f }) {
  const [inputValue, setValue] = useState("");
  const input = useRef();

  return (
    <View style={styles.container}>
      <TextInput
        ref={input}
        style={styles.txtInput}
        value={inputValue}
        onChangeText={text => setValue(text)}
        autoCapitalize="none"
        placeholder="enter a color..."
      />
      <Button
        title="add"
        onPress={() => {
          input.current.blur();
          onNewColor(inputValue);
          setValue("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItem: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },

  txtInput: {
    flex: 1,
    borderWidth: 2,
    fontsize: 20,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  }
});
