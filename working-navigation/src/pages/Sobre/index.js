import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Sobre(props) {
  return (
    <View style={styles.container}>
      <Text>Tela Sobre</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
