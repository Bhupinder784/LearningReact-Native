import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const ActionCard = () => {
    const openWebSite = (websiteLink) => {
        Linking.openURL(websiteLink);
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.headingText}>Action Card</Text>
            <View style={[styles.card, styles.cardElevated]}>

                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's up, and How are you!!!
                    </Text>
                </View>

                {/* Card Image */}
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1617459840892-6d97e6359eae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    }}
                    style={styles.cardImage}
                />

                {/* Body */}
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={styles.bodyText}>
                        Explore the beauty of nature with a touch of elegance. Find breathtaking visuals that inspire you!
                    </Text>
                </View>

                {/* Footer with button */}
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => openWebSite('https://www.pexels.com/search/capturing/')}
                    >
                        <Text style={styles.buttonText}>
                            Click here for more
                        </Text>
                    </TouchableOpacity>
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
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 8,
        marginBottom: 8,
    },
    card: {
        height: 360,
        width: '95%',
        borderRadius: 10,
        marginVertical: 12,
        marginHorizontal: '2%',
        backgroundColor: '#fff',
    },
    cardElevated: {
        elevation: 5,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center', // Centers vertically
        backgroundColor: '#F1F1F1',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
        paddingVertical: 10,
    },
    cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 10,
    },
    bodyContainer: {
        padding: 12,
    },
    bodyText: {
        fontSize: 14,
        color: '#444',
        lineHeight: 20,
    },
    footerContainer: {
        padding: 12,
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#FF9F00',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        elevation: 2, // Adds a slight shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ActionCard;
