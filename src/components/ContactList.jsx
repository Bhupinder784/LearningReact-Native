import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Rohan',
      status: 'Programming Mentor',
      imageUrl:
        'https://westwoodhart.com/cdn/shop/articles/autumn-2024-menswear-guide.png?v=1724626999&width=1400',
    },
    {
      uid: 2,
      name: 'Raghu',
      status: 'Coding Master',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0291/6266/8110/files/westwood-hart-autumn-suit-2024_1024x1024.png?v=1724626736',
    },
    {
      uid: 3,
      name: 'Sheetal',
      status: 'HR Specialist',
      imageUrl:
        'https://i0.wp.com/fashion2apparel.com/wp-content/uploads/2023/02/fashion-trends.jpg?resize=600%2C400&quality=100&ssl=1',
    },
  ];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: imageUrl }} style={styles.userImage} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 12,
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'flex-start',
    marginBottom: 8,
    paddingHorizontal: 16,

  },
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#8D3DAF',
  },
  userInfo: {
    marginLeft: 12,
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  userStatus: {
    fontSize: 14,
    color: '#666',
  },
});

export default ContactList;
