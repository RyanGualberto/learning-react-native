import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        { key: 1, nome: "Strogonoff", valor: 35.9 },
        { key: 2, nome: "Calabresa", valor: 35.9 },
        { key: 3, nome: "Brigadeiro", valor: 35.9 },
        { key: 4, nome: "Quatro Quejos", valor: 35.9 },
      ],
    };
  }
  render() {
    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.item key={k} value={k} label={v.nome} />;
    });
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ pizza: itemValue })
          }
        >
          {pizzasItem}
        </Picker>
        <Text style={styles.pizzas}>
          Voce Escolheu Pizza {this.state.pizzas[this.state.pizza].nome}
        </Text>
        <Text style={styles.pizzas}>
          R${this.state.pizzas[this.state.pizza].valor.toFixed(2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  pizzas: {
    marginTop: 15,
    fontSize: 20,
    textAlign: "center",
  },
});
