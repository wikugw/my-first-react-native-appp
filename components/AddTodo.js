import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native';


export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('')

  const changeHandler = (value) => {
    setText(value)
  }

  return (
    <View>
      <TextInput onChangeText={changeHandler} style={styles.input} placeholderTextColor="#808080" placeholder="add to list..." />
      <Button onPress={() => submitHandler(text)} title="add" color="green" />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    color: '#fff',
    borderColor: '#282828',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  }
})
