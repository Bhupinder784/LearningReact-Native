import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        {/* Card Image */}
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/11146084/pexels-photo-11146084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.cardImage}
        />

        {/* Card Content */}
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>A Flying White Pigeon</Text>
          <Text style={styles.cardLocation}>Jaipur, RJ, India</Text>
          <Text style={styles.cardDescription}>
            Jaipur was India's first planned city. This is reflected in its well-designed intersections and wide, straight main streets. Located just 260 km (162 miles) from New Delhi, Jaipur is a vibrant city with over 3 million people.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 12,
    paddingHorizontal: 8,
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  card: {
    borderRadius: 10,
    marginVertical: 8,
    overflow: 'hidden',
  },
  cardElevated: {
    backgroundColor: '#1B1B1B',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  cardImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 12,
    backgroundColor: '#222', // Slightly lighter background for contrast
  },
  cardTitle: {
    color: '#F1F1F1',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardLocation: {
    color: '#B0BEC5',
    fontSize: 16,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  cardDescription: {
    color: '#CFD8DC',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default FancyCard;
