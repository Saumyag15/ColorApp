import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "color";

export default function ColorDetails({ route }) {
  const { color: name } = route.params;
  const color = Color(name);
  const textColor = {
    fontSize: 30,
    color: color.negate().toString(),
  };
  return (
    <View style={[style.container, { backgroundColor: name }]}>
      <Text style={textColor}>{name}</Text>
      <Text style={textColor}>{color.rgb().toString()}</Text>
      <Text style={textColor}>{color.hsl().toString()}</Text>
      <Text style={textColor}>{color.luminosity()}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },
});
