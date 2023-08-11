import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Lista = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <Text key={index} style={styles.item}>
           nome: {item.name} : idade: {item.idade}  
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  item: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Lista;
