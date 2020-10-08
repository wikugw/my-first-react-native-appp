import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo'

export default function App() {
  const [todos, setTodos] = useState([
    { name: 'ngoding', key: '1' },
    { name: 'nonton', key: '2' },
    { name: 'main', key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { name: text, key: Math.random().toString() }
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoList item={item} pressHandler={pressHandler} />
            )} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  },
  text: {
    color: '#fff'
  }
});
