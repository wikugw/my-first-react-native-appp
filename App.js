import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello world</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum haha haha meja</Text>
        <Text>Lorem ipsum haha haha meja</Text>
        <Text>Lorem ipsum haha haha meja</Text>
        <Text>Lorem ipsum haha haha meja</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#66b933',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: '#696969',
    padding: 20
  }
});
