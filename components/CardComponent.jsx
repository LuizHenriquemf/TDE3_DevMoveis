import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const API_URL = 'https://catfact.ninja/fact';

const CardComponent = ({ backgroundColor }) => {
  const [cardData, setCardData] = useState(null);

  const handleCardClick = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setCardData(data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={handleCardClick}
    >
      {cardData ? (
        <View>
          <Text>Fact: {cardData.fact}</Text>
        </View>
      ) : (
        <Text>Cat fact</Text>
      )}
    </TouchableOpacity>
  );
};

export default CardComponent;
