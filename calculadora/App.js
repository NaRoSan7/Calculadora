import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  function soma() {
    if (num1 == '' || num2 == '') {
      alert('Não deixe espaços em branco!');
    } else {
      const resultado = parseFloat(num1) + parseFloat(num2);

      alert('O resultado é: ' + resultado);
    }
  }

  function subtrair() {
    if (num1 == '' || num2 == '') {
      alert('Não deixe espaços em branco!');
    } else {
      const resultado = parseFloat(num1) - parseFloat(num2);

      alert('O resultado é: ' + resultado);
    }
  }

  function multiplicar() {
    if (num1 == '' || num2 == '') {
      alert('Não deixe espaços em branco!');
    } else {
      const resultado = parseFloat(num1) * parseFloat(num2);

      alert('O resultado é: ' + resultado);
    }
  }

  function dividir() {
    if (num1 == '' || num2 == '') {
      alert('Não deixe espaços em branco!');
    } else {
      const resultado = parseFloat(num1) / parseFloat(num2);

      alert('O resultado é: ' + resultado);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Calculadora </Text>

      <TextInput
        style={styles.input0}
        keyboardType="numeric"
        placeholder="Digite um número"
        onChangeText={(num1) => setNum1(num1)}
      />

      <TextInput
        style={styles.input1}
        keyboardType="numeric"
        placeholder="Digite um número"
        onChangeText={(num2) => setNum2(num2)}
      />

      <TouchableOpacity style={styles.btn} onPress={soma}>
        <Text style={styles.titulobtn}> Somar </Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={subtrair}>
        <Text style={styles.titulobtn}> Subtrair </Text>
      </TouchableOpacity>

      
        <TouchableOpacity style={styles.btn} onPress={multiplicar}>
        <Text style={styles.titulobtn}> Multiplicar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={dividir}>
        <Text style={styles.titulobtn}> Dividir </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#083E74',
    padding:20,
    
  },
  titulo: {
    margin:30,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },

  input0: {
    backgroundColor: '#FDFACA',
    borderRadius: 15,
    margin: 15,
    padding: 1,
    fontSize: 25,
    textAlign: 'center',
  },

  input1: {
    backgroundColor: '#FDFACA',
    borderRadius: 15,
    margin: 15,
    padding: 1,
    fontSize: 25,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#ffaa33',
    margin: 10,
    borderRadius: 10,
    padding: 0,
    alignItens: 'center',
    
    
  },
  titulobtn: {
    fontSize: 25,
    color: '#ffffff',
    textAlign:"center"
  },
});
//
