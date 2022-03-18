import {React, useEffect, useState} from 'react'
import {View, Text, Image, StyleSheet } from 'react-native'

export default function CharacterInfo({route, navigation}){
    const {id} = route.params;
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const json = await response.json();
            setCharacter(json);
            setLoading(false);
        };
        fetchData()
        .catch(console.error);
    }, []);

    return(
      <>
      { loading ? (
        <View style={styles.container}>
        <Text style={styles.loading}>Loading...</Text>
        </View>  
      ) : (
        <View style={styles.container}>
        <Image source={{uri: `${character.image}`}} style={styles.image}/>
        <Text style={styles.name}>{character.name}</Text>
        <Text>Status: {character.status}</Text>
        <Text>Specie: {character.species}</Text>
        <Text>Location: {character.location?.name}</Text>
        </View>
      )} 
      </>
    )
}

const styles = StyleSheet.create({
    loading:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: '50%',
        fontWeight: 'bold'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    image: {
        marginTop: 20,
        width: 150,
        height: 150,
        borderRadius: 15,
    }
})