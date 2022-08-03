import React, { Component } from "react";
import { View, } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'flex-end',justifyContent:'space-evenly'}}>
        <View style={{ width: 50,  backgroundColor:"#222" , height: 50}}></View>
        <View style={{ width: 50,  backgroundColor:"#1238" , height: 50}}></View>
        <View style={{ width: 50,  backgroundColor:"#894" , height: 50}}></View>
      </View>
    )
  }
}

export default App