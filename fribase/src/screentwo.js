import React from "react";
import { View, StyleSheet, Button } from "react-native";
import db from "./config/connection";

export default function App({ navigation }) {
  async function logout() {
    await db.auth().signOut();
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Button title="Sair" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
