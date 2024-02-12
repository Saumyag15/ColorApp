import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import ColorForm from "./ColorForm";
import { useColors } from "../hooks";
import ColorButton from "./ColorButton";

export default function ColorList({ navigation }) {
  const { colors, addColor } = useColors();
  return (
    <>
      <ColorForm onNewColor={addColor} />
      <FlatList
        style={[styles.container]}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={() =>
                navigation.navigate("Details", {
                  color: item.color,
                })
              }
            />
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
});
