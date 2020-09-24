import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: result.image_url}} style={styles.image} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.name}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginLeft: 35,
        marginRight: 35,
        borderBottomWidth: 1,
        borderColor: 'white',
        padding: 5
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 10,
    },
    name : {
        fontWeight: 'bold',
        color: 'white',
        padding: 3
    }
});


export default ResultsDetail;