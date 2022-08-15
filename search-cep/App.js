import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "react-native";
import api from "./src/services/Api";

export default function App(props) {
  const [cep, setCep] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite o CEP desejado:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 12345678"
          value={cep}
          onChangeText={(text) => setCep(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#1d75cd" }]}>
          <Text style={styles.textButton}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#cd3e1d" }]}>
          <Text style={styles.textButton}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: 12345687</Text>
        <Text style={styles.itemText}>Logradouro: rua R</Text>
        <Text style={styles.itemText}>Bairro: 12345687</Text>
        <Text style={styles.itemText}>Cidade: 12345687</Text>
        <Text style={styles.itemText}>Estado: 12345687</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    marginTop: 25,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    justifyContent: "space-around",
  },
  btn: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "red",
  },
  textButton: {
    fontSize: 22,
    color: "#FFF",
  },
  resultado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 22,
  },
});
