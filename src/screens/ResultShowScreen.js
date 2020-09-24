import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';



const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')
    
    const getResult = async (id) => {
        const response = await yelp.get(`${id}`)
        setResult(response.data)
    }
    useEffect(() => {
        getResult(id)
    }, [])

    if(!result) return null
    
    return (
            <View style={styles.container}>
                <Text style={styles.title}>{result.name}</Text>
                <Text style={styles.title_two}>{result.location.display_address}</Text>
                <Text style={styles.title_two}>{result.phone}</Text>
                <FlatList 
                    style={styles.img}
                    data={result.photos} 
                    keyExtractor={(photo) => photo}
                    renderItem={({item}) => {
                        return <Image style={styles.image} source={{ uri: item}} />
                    }} />
            </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 29,
        color: 'white',
        alignSelf: 'center',
        marginTop: 10,
        fontFamily: 'AmericanTypewriter-Light'
    },
    title_two: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center',
        marginTop: 2,
        fontFamily: 'AmericanTypewriter-Light'
    },
    container: {
        flex: 1,
        backgroundColor: '#303960'
    },
    image: {
        height: 200,
        width: 300,
        borderRadius: 15,
        marginBottom: 15
        
    },
    img: {
        alignSelf: 'center',
        marginTop: 30,
    }
});

export default ResultShowScreen
