import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import conn from '../../config/firebase';

export default function Login({changeStatus}) {
  const [type, setType] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (type === 'login') {
      //logins
      const user = conn
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          changeStatus(user.user.uid);
        })
        .catch(err => {
          console.log(err);
          alert('ops deu um erro');
        });
    } else {
      //cadastro
      const user = conn
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          changeStatus(user.user.uid);
        })
        .catch(err => {
          console.log(err);
          alert('ops deu um erro');
        });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Seu Email"
        value={email}
        onChangeText={texto => setEmail(texto)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="******"
        value={password}
        onChangeText={texto => setPassword(texto)}
        style={styles.textInput}
      />
      <TouchableOpacity
        style={[
          styles.handleLogin,
          {backgroundColor: type === 'login' ? '#3ea6f2' : '#141414'},
        ]}
        onPress={handleLogin}>
        <Text style={styles.loginText}>
          {type === 'login' ? 'Acessar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setType(type === 'login' ? 'cadastrar' : 'login')}>
        <Text style={{textAlign: 'center'}}>
          {' '}
          {type === 'login' ? 'Criar Uma Conta' : 'Já Tenho Uma Conta'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f2f6fc',
    paddingHorizontal: 10,
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414',
  },
  handleLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141414',
    height: 45,
    marginBottom: 10,
  },
  loginText: {
    color: '#f2f6fc',
  },
});
