import react, { Component, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: " ",
      img: require("./src/biscoito.png"),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = [
      "siga os bons e aprenda com eles",
      "o bom senso vale mais alto do que muito conhecimento",
      "o riso é a menor distancia entre duas pessoas",
      "deixe de lado as preocupações e seja feliz",
    ];
  }

  quebraBiscoito() {
    let numRandom = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numRandom] + ' "',
      img: require("./src/biscoitoAberto.png"),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity onPress={this.quebraBiscoito} style={styles.botao}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});
