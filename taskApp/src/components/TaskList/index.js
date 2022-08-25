import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function TaskList({data, deleteItem, editItem}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{marginRight: 10}}
        onPress={() => deleteItem(data.key)}>
        <Feather name="trash" color="#fff" size={20} />
      </TouchableOpacity>
      <View
        style={{
          paddingRight: 10,
        }}>
        <TouchableWithoutFeedback onPress={() => editItem(data)}>
          <Text style={styles.itemText}>
            {data.nome}
            {data.key}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#141414',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
  },
  itemText: {
    color: '#fff',
    paddingRight: 10,
  },
});
