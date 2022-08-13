import React, { Component } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";

export default class CompRn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      larAnimada: new Animated.Value(150),
      altAnimada: new Animated.Value(50),
      opacityAnimated: new Animated.Value(0),
    };
    Animated.sequence([
      Animated.timing(this.state.opacityAnimated, {
        toValue: 1,
        duration: 1000,
      }),

      Animated.parallel([
        Animated.timing(this.state.larAnimada, {
          toValue: 300,
          duration: 2000,
        }),
        Animated.timing(this.state.altAnimada, {
          toValue: 100,
          duration: 2000,
        }),
      ]),
      Animated.timing(this.state.opacityAnimated, {
        toValue: 0,
        duration: 2000,
      }),
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: this.state.larAnimada,
            height: this.state.altAnimada,
            backgroundColor: "#4169e1",
            justifyContent: "center",
            opacity: this.state.opacityAnimated,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 22,
              textAlign: "center",
            }}
          >
            Carregando...
          </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
});
