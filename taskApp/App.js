import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Text,
  FlatList,
  Keyboard,
} from 'react-native';
import Login from './src/components/Login';
import TaskList from './src/components/TaskList';
import conn from './src/config/firebase';
import Feather from 'react-native-vector-icons/Feather';

export default function App(props) {
  const [user, setUser] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [key, setKey] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    function getUser() {
      if (!user) {
        return;
      }
      conn
        .database()
        .ref('tarefas')
        .child(user)
        .once('value', snapshot => {
          snapshot?.forEach(childItem => {
            let data = {
              key: childItem.key,
              nome: childItem.val().nome,
            };
            setTasks(oldTasks => [...oldTasks, data]);
          });
        });
    }
    getUser();
  }, [user]);

  function handleDelete(key) {
    conn
      .database()
      .ref('tarefas')
      .child(user)
      .child(key)
      .remove()
      .then(() => {
        const findTasks = tasks.filter(item => item.key !== key);
        setTasks(findTasks);
      });
  }
  function handleEdit(data) {
    setKey(data.key);
    setNewTask(data.nome);
    inputRef.current.focus();
  }

  function handleAdd() {
    if (newTask === '') {
      return;
    }

    if (key !== '') {
      conn
        .database()
        .ref('tarefas')
        .child(user)
        .child(key)
        .update({
          nome: newTask,
        })
        .then(() => {
          const taskIndex = tasks.findIndex(item => item.key === key);
          let taskClone = tasks;
          taskClone[taskIndex].nome = newTask;
          setTasks([...taskClone]);
        });
      Keyboard.dismiss();
      setNewTask('');
      setKey('');
      return;
    }

    let tarefas = conn.database().ref('tarefas').child(user);
    let chave = tarefas.push().key;
    tarefas
      .child(chave)
      .set({
        nome: newTask,
      })
      .then(() => {
        const data = {
          key: chave,
          nome: newTask,
        };

        setTasks(oldTasks => [...oldTasks, data]);
        setNewTask('');
        Keyboard.dismiss();
      });
  }

  function cancelEdit() {
    setKey('');
    setNewTask('');
    Keyboard.dismiss();
  }

  if (!user) {
    return <Login changeStatus={user => setUser(user)} />;
    2;
  }
  return (
    <SafeAreaView style={styles.container}>
      {key.length > 0 ? (
        <View style={{flexDirection: 'row', marginBottom: 8}}>
          <TouchableOpacity onPress={cancelEdit}>
            <Feather name="x-circle" size={20} color="#ff0000" />
          </TouchableOpacity>
          <Text style={{marginLeft: 5, color: '#ff0000'}}>
            Você Está Editando Uma Tarefa
          </Text>
        </View>
      ) : (
        ''
      )}
      <View style={styles.containerTask}>
        <TextInput
          style={styles.input}
          placeholder="O que vai fazer hoje?"
          value={newTask}
          onChangeText={text => setNewTask(text)}
          ref={inputRef}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
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
