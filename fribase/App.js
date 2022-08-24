import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import db from "./src/config/connection";
import Lista from "./src/components/lista";
console.disableYellowBox = true;

export default function App(props) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [loadings, setLoadings] = useState(true);

  useEffect(() => {
    async function dados() {
      setUsuarios([]);
      await db
        .database()
        .ref("usuarios")
        .on("value", (snapshot) => {
          snapshot.forEach((chilItem) => {
            let data = {
              key: chilItem.key,
              nome: chilItem.val().nome,
              cargo: chilItem.val().cargo,
            };

            setUsuarios((oldArray) => [...oldArray, data]);
          });
          setLoadings(false);
        });
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
      {loadings ? (
        <ActivityIndicator size={48} color="red" />
      ) : (
        <FlatList
          keyExtractor={(item) => item.key}
          data={usuarios}
          renderItem={({ item }) => <Lista data={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
});
