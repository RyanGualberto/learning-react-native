import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import db from "./src/config/connection";

console.disableYellowBox = true;

export default function App(props) {
  const [nome, setNome] = useState("Carregando...");
  const [idade, setIdade] = useState("Carregando...");

  useEffect(() => {
    async function dados() {
      await db
        .database()
        .ref("usuarios/1")
        .on("value", (snapshot) => {
          setNome(snapshot.val().nome);
          setIdade(snapshot.val().idade);
        });
      // await db
      //   .database()
      //   .ref("nome")
      //   .once("value", (snapshot) => {
      //     setNome(snapshot.val());
      //   });
    }
    dados();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Olá {nome}</Text>
      <Text style={{ fontSize: 25 }}>Voce Tem {idade} anos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
