import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { AuthContext } from "../../contexts/auth";

export default function Home(props) {
  const { user, signOut } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
