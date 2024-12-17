import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlatCards = () => {
  const cardData = [
    { color: '#EF5354', label: 'Red' },
    { color: '#4CAF50', label: 'Green' },
    { color: '#42A5F5', label: 'Blue' },
  ];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        {cardData.map((card, index) => (
          <View
            key={index}
            style={[styles.card, { backgroundColor: card.color }]}
          >
            <Text style={styles.cardText}>{card.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 12,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Ensures even spacing
    alignItems: 'center',
    marginHorizontal: 8,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default FlatCards;
