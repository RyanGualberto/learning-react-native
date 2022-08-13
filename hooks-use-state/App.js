import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App(props) {
  const [nome, setNome] = useState("Ryan");
  const [input, setInput] = useState("");
  function alteraNome() {
    setNome(input);
  }
  return (
    <View style={styles.container}>
      <TextInput onChangeText={(nome) => setInput(nome)} />
      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.textBtn}>Muda</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    marginTop: 15,
  },
  text: {
    fontSize: 35,
    color: "#222",
    marginTop: 15,
  },
  btn: {
    backgroundColor: "#222",
  },
  textBtn: {
    color: "#fff",
  },
});
