import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function TaskList({data}) {
  return (
    <View>
      <Text>{data.nome}</Text>
    </View>
  );
}
