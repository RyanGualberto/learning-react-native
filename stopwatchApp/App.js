import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "VAI",
      ultimo: null,
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpa = this.limpa.bind(this);
  }

  vai() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        botao: "VAI",
      });
    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 });
      }, 100);
      this.setState({
        botao: "PARAR",
      });
    }
  }

  limpa() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: "VAI",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./src/cronometro.png")} style={styles.img} />
        <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.limpa} style={styles.btn}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.areaUltima}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0
              ? "Ultimo Tempo: " + this.state.ultimo.toFixed(2)
              : ""}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aeef",
  },
  timer: {
    marginTop: -160,
    color: "#f3f3f3",
    fontSize: 65,
    fontWeight: "bold",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
  },
  areaUltima: {
    marginTop: 40,
  },
  textoCorrida: {
    fontSize: 25,
    fontStyle: "italic",
    color: "#f3f3f3",
  },
});
