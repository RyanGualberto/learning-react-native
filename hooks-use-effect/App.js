import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function App(props) {
  const [nome, setNome] = useState("");
  const [input, setInput] = useState("");
  const nomeInput = useRef(null);
  useEffect(() => {
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem("nomes");
      if (nomeStorage !== null) {
        setNome(nomeStorage);
      }
    }
    getStorage();
  }, []);
  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem("nomes", nome);
    }

    saveStorage();
  }, [nome]);
  function alteraNome() {
    setNome(input);
    setInput("");
  }
  function novoNome() {
    nomeInput.current.focus();
  }
  const letrasNome = useMemo(() => {
    console.log("mudou");
    return nome.length;
  }, [nome]);
  return (
    <View style={styles.container}>
      <TextInput onChangeText={(nome) => setInput(nome)} ref={nomeInput} />
      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.textBtn}>Muda</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{nome}</Text>
      <Text style={styles.text}>{letrasNome}</Text>
      <TouchableOpacity onPress={novoNome}>
        <Text>Troca</Text>
      </TouchableOpacity>
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
