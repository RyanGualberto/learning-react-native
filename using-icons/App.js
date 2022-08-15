import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App(props) {
  return (
    <View style={styles.container}>
      <Icon name="home" size={35} color="#112234" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
