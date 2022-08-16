import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Tela Home</Text>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate("Sobre")}>Trocar Tela</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
});
