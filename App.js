import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const json = await response.json();
      console.table(json.results);
      setCharacters(json.results);
    };
    fetchData()
    .catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.title}>
        Rick and Morty characters!
      </Text>
        <ScrollView style={styles.list}>
          {characters.map((character) => (
            <View key={character.id} style={styles.character}>
              <Image
                style={styles.image}
                source={{uri: `${character.image}`}}
                resizeMode="contain"
              />
              <View style={styles.characterInfo}>
                <Text style={styles.name}>
                  {character.name}
                </Text>
                <Text style={styles.moreInfo}>
                  {character.status}
                </Text>
                <Text style={styles.moreInfo}>
                  {character.species}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 10
  },
  list: {
    flex: 1,
    width: '100%',
    fontFamily: 'Roboto',
  },
  character: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  },
  characterInfo: {
    marginLeft: 15
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  moreInfo: {
    fontSize: 14,
    color: '#666'
  },

});
