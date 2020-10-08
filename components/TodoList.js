import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoList({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginVertical: 8,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#282828',
    borderRadius: 10
  }
})
