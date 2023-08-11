import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UserComponent = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUserData(data.results[0]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleRefreshClick = () => {
    fetchUserData();
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text>Name: {userData.name.first} {userData.name.last}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Phone: {userData.phone}</Text>
          <Text>Location: {userData.location.city}, {userData.location.country}</Text>
          <Text>Gender: {userData.gender}</Text>
          <Text>Age: {userData.dob.age}</Text>
          <Button title="Refresh" onPress={handleRefreshClick} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default UserComponent;
