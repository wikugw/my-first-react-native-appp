import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>TO DO APP</Text>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    header: {
      height: 90,
      paddingTop: 38,
      backgroundColor: '#282828'
    },
    title: {
      color: '#fff',
      textAlign: "center",
      fontWeight: 'bold',
      fontSize: 20
    }
  }
)
