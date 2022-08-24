import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import db from "./config/connection";

export default function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // async function Cadastrar() {
  //   await db
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((value) => {
  //       alert("User created" + value.user.email);
  //     })
  //     .catch((error) => {
  //       if (error.code === "auth/weak-password") {
  //         alert("Sua Senha Deve Ter Pelo Menos 6 Caracteres");
  //         return;
  //       }
  //       if (error.code === "auth/invalid-email") {
  //         alert("Email Invalido");
  //         return;
  //       } else {
  //         alert("ops Algo Deu Errado");
  //         return;
  //       }
  //     });
  //   setEmail("");
  //   setPassword("");
  // }

  async function login() {
    await db
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        navigation.navigate("telas");
      })
      .catch((error) => {
        alert(error);
      });

    setEmail("");
    setPassword("");
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>CADASTRO</Text>
      <TextInput
        value={email}
        placeholder="Digite Um Email"
        onChangeText={(texto) => {
          setEmail(texto);
        }}
      />
      <TextInput
        value={password}
        placeholder="Digite Uma Senha"
        onChangeText={(texto) => {
          setPassword(texto);
        }}
      />
      <TouchableOpacity onPress={login}>
        <Text>Acessar</Text>
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
