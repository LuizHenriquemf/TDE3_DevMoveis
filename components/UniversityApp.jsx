import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const API_URL = 'http://universities.hipolabs.com/search?country=Brazil';

const UniversityApp = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setUniversities(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const renderUniversityItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.url}>{item.web_pages[0]}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={universities}
        renderItem={renderUniversityItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  url: {
    color: 'blue',
  },
});

export default UniversityApp;
