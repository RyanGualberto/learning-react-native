import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, nome: "Matheus", idade: 50, email: "matheus@gmail.com" },
        { id: 2, nome: "Joao", idade: 50, email: "Joao@gmail.com" },
        { id: 3, nome: "Henriques", idade: 50, email: "Henriques@gmail.com" },
        { id: 4, nome: "Paulo", idade: 50, email: "Paulo@gmail.com" },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Pessoa data={item} />}
        />

        {/* <ScrollView
          showsVerticalScrollIndicator={false}
          // scrollEnabled={false}
          // horizontal={true}
        >
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    backgroundColor: "red",
    height: 250,
  },
  box2: {
    backgroundColor: "green",
    height: 250,
  },
  box3: {
    backgroundColor: "yellow",
    height: 250,
  },
  box4: {
    backgroundColor: "blue",
    height: 250,
  },
  areaPessoa: {
    backgroundColor: "#222",
    height: 200,
    marginBottom: 15,
  },
  textoPessoa: {
    color: "#f3f3f3",
    fontSize: 20,
  },
});

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}> Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}> Email: {this.props.data.email}</Text>
      </View>
    );
  }
}
