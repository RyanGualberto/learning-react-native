import React, { Component } from "react";
import { View, Text, Image } from 'react-native'

class App extends Component {
  render() {
    let nome = 'Ryan'
    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text style={{ color: '#123', fontSize: 25 }}>Olá DeBoa?!</Text>

        <Jobs largura={200} altura={400} nome='Ryan' />

        <Text>{nome}</Text>
      </View>
    )
  }
}

class Jobs extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://sujeitoprogramador.com/steve.png'
          }}
          style={{
            width: this.props.largura,
            height: this.props.altura
          }} />
        <Text>{this.props.nome}</Text>
      </View>
    )
  }
}

export default App