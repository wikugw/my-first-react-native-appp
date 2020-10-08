import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [pokemons, setPokemon] = useState([
    { name: 'charizard', key: 1 },
    { name: 'turtwig', key: 2 },
    { name: 'blaziken', key: 3 },
    { name: 'rayquaza', key: 4 },
    { name: 'infernape', key: 5 },
    { name: 'empoleon', key: 6 },
    { name: 'bulbasaur', key: 7 },
    { name: 'groudon', key: 8 },
    { name: 'ambipom', key: 9 }
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {pokemons.map((pokemon) => {
          return (
            <View key={pokemon.key}>
              <Text style={styles.text}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  text: {
    color: 'green',
    padding: 40,
    borderWidth: 1,
    borderColor: 'green',
    margin: 5
  }
});
