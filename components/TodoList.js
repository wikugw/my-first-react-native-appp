import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoList({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="grey" />
        <Text style={styles.text} >{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    marginVertical: 8,
    textAlign: 'center',
    backgroundColor: '#282828',
    borderRadius: 10
  },
  text: {
    color: '#fff',
    marginLeft: 20
  }
})
