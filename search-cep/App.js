import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
} from "react-native";
import { StatusBar } from "react-native";
import api from "./src/services/Api";

export default function App(props) {
  const [cep, setCep] = useState("");
  const [cepUser, setCepUser] = useState(null);
  const inputRef = useRef(null);

  function limpar() {
    setCep("");
    inputRef.current.focus();
    setCepUser(null);
  }
  async function buscar() {
    if (cep == "") {
      alert("Digite Um CEP");
      setCep("");
      return;
    }
    try {
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      Keyboard.dismiss();
    } catch (err) {
      console.log("err: " + err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite o CEP desejado:</Text>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Ex: 12345678"
          value={cep}
          onChangeText={(text) => setCep(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity
          onPress={buscar}
          style={[styles.btn, { backgroundColor: "#1d75cd" }]}
        >
          <Text style={styles.textButton}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={limpar}
          style={[styles.btn, { backgroundColor: "#cd3e1d" }]}
        >
          <Text style={styles.textButton}>Limpar</Text>
        </TouchableOpacity>
      </View>
      {cepUser && (
        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
        </View>
      )}
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
