import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Header from './components/Header';
import Lista from './components/Lista';
import CardComponent from './components/CardComponent';
import UserComponent from './components/UserComponent';
import UniversityApp from './components/UniversityApp';

const array = [
  { name: 'Fulano', idade: 20 },
  { name: 'Beltrano', idade: 22 },
  { name: 'Ciclano', idade: 19 },
  { name: 'Jhon Doe', idade: 30 },
];

export default function App() {
  const [currentComponent, setCurrentComponent] = useState('Header');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Header':
        return <Header title="Use os botões para navegar entre as atividades"/>;
      case 'CardComponent':
        return <CardComponent backgroundColor="antiquewhite" />;
      case 'Lista':
        return <Lista items={array} />;
      case 'UserComponent':
        return <UserComponent />;
      case 'UniversityApp':
        return <UniversityApp />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderComponent()}
      <View style={styles.buttonContainer}>
        <Button title="Header" onPress={() => setCurrentComponent('Header')} />
        <Button title="Card" onPress={() => setCurrentComponent('CardComponent')} />
        <Button title="Lista" onPress={() => setCurrentComponent('Lista')} />
        <Button title="User" onPress={() => setCurrentComponent('UserComponent')} />
        <Button title="University" onPress={() => setCurrentComponent('UniversityApp')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
