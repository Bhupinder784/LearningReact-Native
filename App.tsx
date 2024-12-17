import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import FlatCards from './src/components/FlatCards';
import ElevatedCard from './src/components/ElevatedCard';
import FancyCard from './src/components/FancyCard';
import ActionCard from './src/components/ActionCard';
import ContactList from './src/components/ContactList'; 

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatCards />

        {/* Elevated Cards */}
        <ElevatedCard />

        {/* Fancy Cards */}
        <FancyCard />
        <FancyCard />

        {/* Contact List */}
        <ContactList />

        {/* Action Card */}
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA'
  },
  contentContainer: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
});

export default App;
