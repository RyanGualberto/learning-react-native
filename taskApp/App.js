import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';
import Login from './src/components/Login';
import TaskList from './src/components/TaskList';
let tasks = [
  {key: '1', nome: 'Comprar Guarana'},
  {key: '2', nome: 'Comprar Guarana'},
  {key: '3', nome: 'Comprar Guarana'},
];

export default function App(props) {
  const [user, setUser] = useState(null);
  const [newTask, setNewTask] = useState('');

  function handleDelete(key) {
    console.log(key);
  }
  function handleEdit(key) {
    console.log(key);
  }

  if (!user) {
    return <Login changeStatus={user => setUser(user)} />;
    2;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTask}>
        <TextInput
          style={styles.input}
          placeholder="O que vai fazer hoje?"
          value={newTask}
          onChangeText={text => setNewTask(text)}
        />
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <TaskList
            data={item}
            deleteItem={handleDelete}
            editItem={handleEdit}
          />
        )}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
  },
  containerTask: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f2f6fc',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#141414',
    height: 45,
  },
  buttonAdd: {
    backgroundColor: '#141414',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
});
