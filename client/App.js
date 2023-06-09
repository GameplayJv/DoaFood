import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Axios from "axios";

const submeterInformacao = (texto) => {
  Axios.post(  "http://192.168.3.17:3306/alimento", {alimento: texto} )
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DoaFood</Text>
      <Button
        title="Adicionar Alimento"
        onPress={() => navigation.navigate('AddFood')}
      />
      <Button
        title="Lista de Alimentos"
        onPress={() => navigation.navigate('FoodList')}
      />
    </View>
  );
};

const AddFoodScreen = ({ navigation, setAlimentos }) => {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [validade, setValidade] = useState('');
  const [armazenamento, setArmazenamento] = useState('');

  const handleAddFood = () => {
    const newFood = {
      id: Date.now().toString(),
      nome,
      quantidade,
      validade,
      armazenamento,
    };
  
    setAlimentos(prevAlimentos => [...prevAlimentos, newFood]);
    submeterInformacao(nome); // Envia o nome do alimento para o banco de dados
    navigation.navigate('HomeScreen');
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Alimento</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantidade em kg"
        value={quantidade}
        onChangeText={text => setQuantidade(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Data de Validade"
        value={validade}
        onChangeText={text => setValidade(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Tipo de Armazenamento"
        value={armazenamento}
        onChangeText={text => setArmazenamento(text)}
        style={styles.input}
      />
      <Button title="Salvar" onPress={handleAddFood} />
    </View>
  );
};

const FoodListScreen = ({ alimentos, setAlimentos }) => {
  const handleRemoveFood = (id) => {
    setAlimentos(prevAlimentos => prevAlimentos.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Alimentos</Text>
      <FlatList
        data={alimentos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Nome: {item.nome}</Text>
            <Text style={styles.itemText}>Quantidade: {item.quantidade}</Text>
            <Text style={styles.itemText}>Validade: {item.validade}</Text>
            <Text style={styles.itemText}>Armazenamento: {item.armazenamento}</Text>
            <Button
              title="Excluir"
              onPress={() => handleRemoveFood(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '123123') {
      navigation.navigate('HomeScreen');
    } else {
      setErrorMessage('Credenciais inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>}
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [alimentos, setAlimentos] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddFood">
          {props => <AddFoodScreen {...props} setAlimentos={setAlimentos} />}
        </Stack.Screen>
        <Stack.Screen name="FoodList">
          {props => <FoodListScreen {...props} alimentos={alimentos} setAlimentos={setAlimentos} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  itemText: {
    fontSize: 16,
  },
});