import React, { Component } from "react";
import { View, } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 2 , width: 300,  backgroundColor:"#222" , height: 300}}></View>
        <View style={{flex: 1 , width: 300,  backgroundColor:"#1238" , height: 300}}></View>
        <View style={{flex: 1 , width: 300,  backgroundColor:"#894" , height: 300}}></View>
      </View>
    )
  }
}

export default App