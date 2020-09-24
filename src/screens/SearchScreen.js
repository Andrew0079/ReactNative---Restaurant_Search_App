import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <View style={styles.backGroundStyle}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} />
                {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title="Cost Effective"/>
                <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title="Bit Pricier"/>
                <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    backGroundStyle: {
        backgroundColor: '#303960',
        flex: 1,
    }
});

export default SearchScreen
