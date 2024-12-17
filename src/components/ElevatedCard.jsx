import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ElevatedCard = () => {
    // Data array for cards to make it dynamic
    const cardData = ['Top', 'me', 'to', 'scroll', 'more', '😊'];

    return (
        <View style={styles.root}>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.container}
            >
                {cardData.map((item, index) => (
                    <View key={index} style={[styles.card, styles.cardElevated]}>
                        <Text style={styles.cardText}>{item}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
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
        paddingHorizontal: 8,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        marginHorizontal: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Android shadow
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
    },
    cardText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
});

export default ElevatedCard;
