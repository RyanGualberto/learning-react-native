import React, { Component } from "react";
import { View, TextInput, Text } from 'react-native'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: "MAtheus"
    }

    this.pegaNome = this.pegaNome.bind(this)
  }

  pegaNome(texto){
    if (texto.length > 0) {
      this.setState({nome: 'Bem Vindo ' + texto})
    } else {
      this.setState({nome: ''})
    }
  }

  render() {
    return (
      <View style={{}}>
        <TextInput style={{borderWidth: 3}} onChangeText={this.pegaNome} />
        <Text>{this.state.nome}</Text>
      </View>
    )
  }
}

export default App