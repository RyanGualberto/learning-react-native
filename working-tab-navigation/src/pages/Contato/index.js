import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Contato(props) {
  return (
    <View style={styles.container}>
      <Text>Tela Contato</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
