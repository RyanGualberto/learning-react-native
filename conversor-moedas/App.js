import React, { Component } from "react";
import { StatusBar } from "react-native";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Conversor from "./src/Conversor";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "compRn",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <ScrollView>
          <Conversor moedaA="USD" moedaB="BRL" />
          <Conversor moedaA="BRL" moedaB="USD" />
          <Conversor moedaA="EUR" moedaB="BRL" />
          <Conversor moedaA="BRL" moedaB="EUR" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
});
