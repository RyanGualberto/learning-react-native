import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import db from "./src/config/connection";

console.disableYellowBox = true;

export default function App(props) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");

  useEffect(() => {
    async function dados() {
      // await db.database().ref("tipo").set("cliente");
      // await db.database().ref("outroTipp").set("vendedor");
      // await db.database().ref("outroTipp").remove();
      // await db.database().ref("usuarios").child(3).set({
      //   nome: "RYannnn",
      //   idade: "18",
      // });
      // await db.database().ref("usuarios").child(3).update({
      //   nome: "RV",
      // });
    }
    dados();
  }, []);

  async function Cadastrar() {
    if ((nome !== "") & (cargo !== "")) {
      let usuarios = await db.database().ref("usuarios");
      let chave = usuarios.push().key;
      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo,
      });

      alert("Cadastrado com sucessos");
      setCargo("");
      setNome("");
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Digite Um Nome</Text>
      <TextInput
        value={nome}
        placeholder="Digite Um Nome"
        onChangeText={(texto) => {
          setNome(texto);
        }}
      />
      <TextInput
        value={cargo}
        placeholder="Digite Um Nome"
        onChangeText={(texto) => {
          setCargo(texto);
        }}
      />
      <TouchableOpacity onPress={Cadastrar}>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
