import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";

export default class CompRn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      larAnimada: new Animated.Value(150),
      altAnimada: new Animated.Value(50),
    };
    this.carregaGrafico = this.carregaGrafico.bind(this);
    // Animated.sequence([
    //   Animated.timing(this.state.opacityAnimated, {
    //     toValue: 1,
    //     duration: 1000,
    //   }),

    //   Animated.parallel([
    //     Animated.timing(this.state.larAnimada, {
    //       toValue: 300,
    //       duration: 2000,
    //     }),
    //     Animated.timing(this.state.altAnimada, {
    //       toValue: 100,
    //       duration: 2000,
    //     }),
    //   ]),
    //   Animated.timing(this.state.opacityAnimated, {
    //     toValue: 0,
    //     duration: 2000,
    //   }),
    // ]).start();

    // Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(this.state.larAnimada, {
    //       toValue: 300,
    //       duration: 700,
    //     }),
    //     Animated.timing(this.state.larAnimada, {
    //       toValue: 100,
    //       duration: 700,
    //     }),
    //   ])
    // ).start();
  }

  carregaGrafico() {
    Animated.sequence([
      Animated.timing(this.state.altAnimada, {
        toValue: 300,
        duration: 700,
      }),
      Animated.timing(this.state.altAnimada, {
        toValue: 100,
      }),
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          styles={{
            height: 80,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "#4169e1",
          }}
        >
          <View
            styles={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={this.carregaGrafico}>
              <Text
                style={{
                  fontSize: 25,
                  color: "#fff",
                }}
              >
                Disparar
              </Text>
            </TouchableOpacity>
            <Animated.View
              style={{
                width: this.state.larAnimada,
                height: this.state.altAnimada,
                backgroundColor: "#4169e1",
                justifyContent: "center",
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
        </View>
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
