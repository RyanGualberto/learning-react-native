import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Rela Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
