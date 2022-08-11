import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";


export default class Pessoa extends Component {
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
  
  
const styles = StyleSheet.create({
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