import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import api from "../api";

export default class Conversor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moedaA: props.moedaA,
      moedaB: props.moedaB,
      moedaB_valor: 0,
      valorConvertido: 0,
    };
    this.converter = this.converter.bind(this);
  }

  async converter() {
    let de_para = this.state.moedaA + "_" + this.state.moedaB;
    const response = await api.get(
      `convert?q=${de_para}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`
    );
    let cotacao = response.data[de_para];
    let resultado = cotacao * parseFloat(this.state.moedaB_valor);
    this.setState({
      valorConvertido: resultado.toFixed(2),
    });
    Keyboard.dismiss();
  }

  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.titulo}>
          {this.props.moedaA} para {this.props.moedaB}
        </Text>
        <TextInput
          placeholder="Valor A Ser Convertido"
          style={styles.areInput}
          onChangeText={(moedaB_valor) => this.setState({ moedaB_valor })}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.botao} onPress={this.converter}>
          <Text style={styles.btnTexto}></Text>
        </TouchableOpacity>
        <Text style={styles.valorConvertido}>
          {this.state.valorConvertido === 0 ? "" : this.state.valorConvertido}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#222",
  },
  areInput: {
    width: 280,
    height: 45,
    backgroundColor: "#CCC",
    textAlign: "center",
    marginTop: 15,
    fontSize: 20,
    color: "#222",
    borderRadius: 5,
  },
  botao: {
    width: 150,
    height: 45,
    backgroundColor: "#FF0000",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
  },
  valorConvertido: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
});
