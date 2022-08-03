import React, { Component } from "react";
import { View, Text, Button } from 'react-native'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: 'Matheus'
    }
    this.entrar = this.entrar.bind(this)
  }

  entrar(){
    this.setState({
      nome: 'Jose Silva'
    })
  }

  render() {
    let nome = 'Ryan'
    return (
      <View>
        <Text>{this.state.nome}</Text>
        <Button title="Trocar" onPress={this.entrar}/>
      </View>
    )
  }
}

export default App