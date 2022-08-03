import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Texto </Text>
        <Text>Texto </Text>
        <Text>Texto </Text>
        <Text>Texto </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  }
})

export default App